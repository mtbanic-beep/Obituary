import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./sections/Navbar";
import { Footer } from "./sections/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { AccessibilityWidget } from "./components/AccessibilityWidget";
import { CookiePreferences } from "./components/CookiePreferences";
import { HomePage } from "./pages/HomePage";
import ObituaryPage from "./pages/ObituaryPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#fafafa] flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="/obituaries/:slug" element={<ObituaryPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
        <FloatingButtons />
        <AccessibilityWidget />
        <CookiePreferences />
      </div>
    </Router>
  );
};

export default App;
