// resources/js/Pages/Homepage.tsx

import HeroBlock from '@/components/block/hero-block';
import AboutUs from '@/components/homepage/AboutUs';
import ClientLogos from '@/components/homepage/ClientLogos';
import OurWorks from '@/components/homepage/OurWorks';
import AppLayout from '@/layouts/app-layout';
import { IBlock } from '@/types/blocks.type';
import { Head } from '@inertiajs/react';

interface HomepageProps {
    seo?: {
        title?: string;
        description?: string;
        image?: string | null;
    };
    blocks: IBlock[];
}

const Homepage = ({ seo, blocks }: HomepageProps) => {
    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Homepage'}>
                <meta name="description" content={seo?.description || 'Welcome to Arteegroup, your partner in digital innovation.'} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>
            <div className="font-gotham bg-black">
                <HeroBlock data={blocks.find((block) => block.type === 'hero')?.data || {}} />
                <AboutUs />
                <ClientLogos />
                <OurWorks />
            </div>
        </>
    );
};
Homepage.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default Homepage;

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
