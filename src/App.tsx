import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import  Layout  from "./Layout.jsx";

const HomeLazy = lazy(() => import("./components/home"));
const BlogLazy = lazy(() => import("./components/blog"));
const BlogDetailsLazy = lazy(() => import("./components/blogDetails"));
const ContactSectionLazy = lazy(() => import("./components/contact/ContactSection.js"));
const AboutSectionLazy = lazy(() => import("./components/about/AboutSection.js"));
const NotFoundLazy = lazy(() => import("./components/notFound.js"));
const PrivacyLazy = lazy(() => import("./components/privacy.tsx"));

function App() {
  return (
    <Suspense fallback={<p></p>}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomeLazy />} />
          <Route path="/blogs" element={<BlogLazy />} />
          <Route path="/blogs/:slug" element={<BlogDetailsLazy />} />
          <Route path="/contact" element={<ContactSectionLazy />} />
          <Route path="/about" element={<AboutSectionLazy />} />
          <Route path="*" element={<NotFoundLazy />} />
          <Route path="/privacy-policy" element={<PrivacyLazy />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

