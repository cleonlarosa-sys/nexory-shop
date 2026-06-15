import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import { WhyUs, Categories } from "./components/WhyUsAndCategories";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white antialiased">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <WhyUs />
        <Categories />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
