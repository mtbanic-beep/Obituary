import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./sections/Navbar";
import { Footer } from "./sections/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { AccessibilityWidget } from "./components/AccessibilityWidget";
import { CookiePreferences } from "./components/CookiePreferences";
import { HomePage } from "./pages/HomePage";
import { ObituaryPage } from "./pages/ObituaryPage";

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/obituaries/Rhonda-Mary-Olson" element={<ObituaryPage />} />
        </Routes>

        <Footer />
        <FloatingButtons />
        <AccessibilityWidget />
        <CookiePreferences />
      </div>
    </Router>
  );
};
