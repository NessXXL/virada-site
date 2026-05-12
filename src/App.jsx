import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import SignalSystem from "./components/SignalSystem.jsx";
import Workflow from "./components/Workflow.jsx";
import DashboardShowcase from "./components/DashboardShowcase.jsx";
import ProofSection from "./components/ProofSection.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <SignalSystem />
      <Workflow />
      <DashboardShowcase />
      <ProofSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
