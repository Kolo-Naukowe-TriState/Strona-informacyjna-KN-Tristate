import Section from "../Section/Section";
import aboutData from "../../data/about.json";

export default function About({ logoCircle }) {
  return (
    <Section
      id="o-nas"
      title={aboutData.title}
      content={
        <>
          <img
            src={logoCircle}
            alt="Logo Koła Naukowego Układów Cyfrowych"
            className="logo-big"
          />

          {aboutData.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </>
      }
    />
  );
}
