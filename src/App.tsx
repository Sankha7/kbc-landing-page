import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const HomeLazy = lazy(() => import("./components/home"));
const BlogLazy = lazy(() => import("./components/blog"));
const BlogDetailsLazy = lazy(() => import("./components/blogDetails"));
const ContactSectionLazy = lazy(() => import("./components/contact/ContactSection"));
const AboutSectionLazy = lazy(() => import("./components/about/AboutSection"));
const NotFoundLazy = lazy(() => import("./components/notFound"));
const PrivacyLazy = lazy(() => import("./components/privacy"));
const DeleteComponent = lazy(() => import("./components/delete"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeLazy />} />
          <Route path="blogs" element={<BlogLazy />} />
          <Route path="blogs/:slug" element={<BlogDetailsLazy />} />
          <Route path="contact" element={<ContactSectionLazy />} />
          <Route path="about" element={<AboutSectionLazy />} />
          <Route path="privacy-policy" element={<PrivacyLazy />} />
          <Route path="delete-account" element={<DeleteComponent />} />
          <Route path="*" element={<NotFoundLazy />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
