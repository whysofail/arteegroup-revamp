// resources/js/Pages/Homepage.tsx

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
            <div className="mb-4 h-px w-full bg-[#4B4B4B]" />
            <Footer />
        </div>
    );
}
// resources/js/Pages/Homepage.tsx

// export default function Homepage({ seo, blocks }) {
//     return (
//         <>
//             <Head title={seo?.title}>
//                 <meta name="description" content={seo?.description} />
//                 {seo?.image && <meta property="og:image" content={seo.image} />}
//             </Head>

//             <main>
//                 {/* Debug props */}
//                 <pre>{JSON.stringify({ seo, blocks }, null, 2)}</pre>

//                 {/* Render blocks */}
//             </main>
//         </>
//     );
// }
