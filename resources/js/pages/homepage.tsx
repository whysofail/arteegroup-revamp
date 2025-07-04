import AboutUs from '@/components/homepage/AboutUs';
import ClientLogos from '@/components/homepage/ClientLogos';
import Footer from '@/components/homepage/Footer';
import HeroSection from '@/components/homepage/HeroSection';
import Navbar from '@/components/homepage/Navbar';
import OurWorks from '@/components/homepage/OurWorks';

export default function Home() {
    return (
        <div className="font-gotham bg-black">
            <Navbar />
            <HeroSection />
            <AboutUs />
            <ClientLogos />
            <OurWorks />
            <div className="h-px w-full bg-[#4B4B4B] md:mb-4" />
            <Footer />
        </div>
    );
}