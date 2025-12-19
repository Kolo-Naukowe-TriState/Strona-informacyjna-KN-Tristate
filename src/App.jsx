import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import PuzzlePage from "./pages/PuzzlePage";

function App() {
  return (
    <BrowserRouter basename="/kolo-uklady">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekty" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
