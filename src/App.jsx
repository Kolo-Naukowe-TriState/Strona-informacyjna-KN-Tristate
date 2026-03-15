import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Loader from "./components/Loader/Loader";
import { Suspense, lazy } from "react";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const PuzzlePage = lazy(() => import("./pages/PuzzlePage"));


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekty" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/puzzle" element={<PuzzlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
