import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import ClientLogos from "@/components/homepage/ClientLogos";
import OurWorks from "@/components/homepage/OurWorks";
import Footer from "@/components/homepage/Footer";
import AboutUs from "@/components/homepage/AboutUs";

export default function Home() {
  return (
    <div className="bg-black font-gotham">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ClientLogos />
      <OurWorks />
      <div className="h-px w-full bg-[#4B4B4B] mb-4" />
      <Footer />
    </div>
  );
}