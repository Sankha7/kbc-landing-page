import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Blog from "./components/blog";
import Contact from "./components/contact";
import About from "./components/about";
import  Layout  from "./Layout.jsx";
import { ContactSection } from "./components/contact/ContactSection.js";
import BlogsSection from "./components/landing/BlogsSection.js";
import AboutSection from "./components/about/AboutSection.js";
import NotFound from "./components/notFound.js";
import Privacy from "./components/privacy.tsx";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/blogs" element={<BlogsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

