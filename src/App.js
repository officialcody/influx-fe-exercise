import "./App.css";
import FAQ from "./components/FAQ";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="position-relative">
      <Navbar />
      <HeroBanner />
      <Subscription />
      <FAQ />
    </div>
  );
}

export default App;
