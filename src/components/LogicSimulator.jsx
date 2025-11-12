import React, { useState, useMemo } from "react";
import "./LogicSimulator.css";

/** funkcje bramek */
const gateFuncs = {
  AND: (a, b) => (a & b) ? 1 : 0,
  OR:  (a, b) => (a | b) ? 1 : 0,
  XOR: (a, b) => (a ^ b) ? 1 : 0,
  NAND:(a, b) => ((a & b) ? 0 : 1),
  NOR: (a, b) => ((a | b) ? 0 : 1),
  NOT: (a)    => a ? 0 : 1,
};

const GateLabel = ({ type }) => (
  <svg width="90" height="60" viewBox="0 0 90 60" className="gate-svg" aria-hidden>
    <rect x="6" y="10" width="58" height="40" rx="8" fill="#10213a" stroke="#00bcd4" strokeWidth="2"/>
    <text x="35" y="37" fill="#fff" fontSize="14" fontFamily="Arial" textAnchor="middle">{type}</text>
    {/* output semicircle */}
    <path d="M64 15 Q80 30 64 45" fill="none" stroke="#00bcd4" strokeWidth="2"/>
  </svg>
);

const LED = ({ on }) => (
  <div className={`led ${on ? "led-on" : "led-off"}`} aria-hidden />
);

export default function LogicSimulator() {
  const [gatesCount, setGatesCount] = useState(1); // 1 or 2
  const [gate1, setGate1] = useState("AND");
  const [gate2, setGate2] = useState("AND");
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [gate2InputBSource, setGate2InputBSource] = useState("B"); // "B" or "OUT1" or "A"
  const [autoPlay, setAutoPlay] = useState(false);

  // compute outputs
  const out1 = useMemo(() => {
    if (gate1 === "NOT") return gateFuncs.NOT(A);
    return gateFuncs[gate1](A, B);
  }, [gate1, A, B]);

  const gate2InA = useMemo(() => {
    // gate2 first input we'll feed from OUT1 (if two gates) by default
    if (gatesCount === 1) return null;
    // let gate2 take OUT1 as input A
    return out1;
  }, [gatesCount, out1]);

  const out2 = useMemo(() => {
    if (gatesCount === 1) return null;
    // decide inputs for gate2:
    // we'll use gate2InputBSource for second input; first input is gate2InA (out1)
    const inA = gate2InA;
    let inB;
    if (gate2 === "NOT") {
      // NOT uses only inA
      return gateFuncs.NOT(inA);
    }
    if (gate2InputBSource === "OUT1") inB = out1;
    else if (gate2InputBSource === "A") inB = A;
    else inB = B;
    return gateFuncs[gate2](inA, inB);
  }, [gatesCount, gate2, gate2InputBSource, gate2InA, out1, A, B]);

  // optional autoplay flipping inputs for demo
  React.useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setA(prev => (prev ? 0 : 1));
      setB(prev => (prev ? 0 : 1));
    }, 1200);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section id="logic-sim" className="logic-section">
      <h2>Symulator układów cyfrowych — mini-demo</h2>
      <p className="muted">Zbuduj prosty układ z 1 lub 2 bramek i obserwuj wyjścia na diodach LED.</p>

      <div className="controls">
        <div className="row">
          <label>Ilość bramek:</label>
          <select value={gatesCount} onChange={e => setGatesCount(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>

        <div className="row">
          <label>Wejście A</label>
          <div className="toggle-row">
            <button className={`toggle ${A ? "on" : ""}`} onClick={() => setA( prev => prev ? 0 : 1)}>{A ? "1" : "0"}</button>
            <span className="hint">kliknij by zmienić</span>
          </div>
        </div>

        <div className="row">
          <label>Wejście B</label>
          <div className="toggle-row">
            <button className={`toggle ${B ? "on" : ""}`} onClick={() => setB( prev => prev ? 0 : 1)}>{B ? "1" : "0"}</button>
            <span className="hint">kliknij by zmienić</span>
          </div>
        </div>

        <div className="row">
          <label>Bramka 1</label>
          <select value={gate1} onChange={e => setGate1(e.target.value)}>
            {Object.keys(gateFuncs).map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        {gatesCount === 2 && (
          <>
            <div className="row">
              <label>Bramka 2 (wejście A = wyjście bramki 1)</label>
              <select value={gate2} onChange={e => setGate2(e.target.value)}>
                {Object.keys(gateFuncs).map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div className="row">
              <label>Źródło wejścia B dla bramki 2</label>
              <select value={gate2InputBSource} onChange={e => setGate2InputBSource(e.target.value)}>
                <option value="B">Wejście B (B)</option>
                <option value="A">Wejście A (A)</option>
                <option value="OUT1">Wyjście bramki 1 (OUT1)</option>
              </select>
            </div>
          </>
        )}

        <div className="row">
          <label>Autoplay (demo)</label>
          <input type="checkbox" checked={autoPlay} onChange={e => setAutoPlay(e.target.checked)} />
        </div>
      </div>

      <div className="sim-area">
        {/* inputs */}
        <div className="wiring-row">
          <div className="wire-block">
            <div className="wire-label">A</div>
            <div className="wire-value">{A}</div>
            <LED on={A === 1} />
          </div>

          <div className="wire-block">
            <div className="wire-label">B</div>
            <div className="wire-value">{B}</div>
            <LED on={B === 1} />
          </div>
        </div>

        {/* Gate 1 */}
        <div className="gates-row">
          <div className="gate-block">
            <GateLabel type={gate1} />
            <div className="gate-caption">OUT1: {out1}</div>
            <LED on={out1 === 1} />
          </div>

          {gatesCount === 2 && (
            <>
              <div className="arrow">➜</div>
              <div className="gate-block">
                <GateLabel type={gate2} />
                <div className="gate-caption">OUT2: {out2}</div>
                <LED on={out2 === 1} />
              </div>
              <div className="gate2-inputs">
                  <small>IN A = OUT1 ({out1})</small><br/>
                  <small>IN B = {gate2InputBSource === "OUT1" ? `OUT1 (${out1})` : (gate2InputBSource === "A" ? `A (${A})` : `B (${B})`)}</small>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="truth-table">
        <h4>Podsumowanie</h4>
        <div className="tt-row">
          <strong>A</strong><strong>B</strong><strong>OUT1</strong>{gatesCount===2 && <strong>OUT2</strong>}
        </div>
        <div className="tt-row">
          <span>{A}</span><span>{B}</span><span>{out1}</span>{gatesCount===2 && <span>{out2}</span>}
        </div>
      </div>

      <p className="note">Można używać NOT jako bramki jednowejściowej (bierze A lub OUT1 jako wejście).</p>
    </section>
  );
}
