import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import NotFoundPage from "./Pages/404";
import { AnimatePresence } from "framer-motion"; // (optional, can remove if unused)

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <Home />
      <About />
      <Portofolio />
      <ContactPage />
      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Vijay™
            </a>
            . All Rights Reserved.
          </span>
        </center>
      </footer>
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Vijay™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
