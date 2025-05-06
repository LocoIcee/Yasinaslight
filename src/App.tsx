import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import layout and pages
import Layout from "./components/website/common/Layout";
import HomePage from "./components/website/pages/HomePage";
import AboutPage from "./components/website/pages/AboutPage";
import ServicesPage from "./components/website/pages/ServicesPage";
import ContactPage from "./components/website/pages/ContactPage";
import ClassesPage from "./components/website/pages/ClassesPage";
import ProductsPage from "./components/website/pages/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <AboutPage />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout>
            <ServicesPage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactPage />
          </Layout>
        } />
        <Route path="/classes" element={
          <Layout>
            <ClassesPage />
          </Layout>
        } />
        <Route path="/products" element={
          <Layout>
            <ProductsPage />
          </Layout>
        } />
        {/* Additional routes will be added as pages are developed */}
        <Route path="*" element={
          <Layout>
            <div className="container mx-auto py-20 px-4 text-center">
              <h1 className="text-4xl mb-6" style={{ color: "#563D7C" }}>Page Under Construction</h1>
              <p className="mb-6">We're currently working on this page. Please check back soon!</p>
              <a 
                href="/"
                className="px-6 py-3 rounded-md inline-block"
                style={{ backgroundColor: "#4ECDC4", color: "#F8F5F2" }}
              >
                Return to Homepage
              </a>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;