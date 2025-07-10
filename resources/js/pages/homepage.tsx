// resources/js/Pages/Homepage.tsx

import HeroBlock from '@/components/block/hero-block';
import AboutUs from '@/components/homepage/AboutUs';
import ClientLogos from '@/components/homepage/ClientLogos';
import OurWorks from '@/components/homepage/OurWorks';
import AppLayout from '@/layouts/app-layout';
import { IBlock, IWork } from '@/types/blocks.type';
import { Head } from '@inertiajs/react';

interface HomepageProps {
    seo?: {
        title?: string;
        description?: string;
        image?: string | null;
    };
    blocks: IBlock[];
    works: IWork[];
    divisions?: {
        name?: string;
        slug?: string;
        color?: string;
        background_url?: string;
    }[];
}

const Homepage = ({ seo, blocks, works }: HomepageProps) => {
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
                <OurWorks works={works} />
            </div>
        </>
    );
};

Homepage.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default Homepage;
