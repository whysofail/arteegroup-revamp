// resources/js/Pages/Homepage.tsx

import { RenderBlock } from '@/components/block';
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
    works: {
        campaign_image?: string;
        name?: string;
        campaign?: string;
        campaign_name?: string;
        campaign_description?: string;
    }[];
}

const Homepage = ({ seo, blocks, works }: HomepageProps) => {
    console.log('Rendering Homepage with blocks:', blocks);
    const hasHeroBlock = blocks.some((block) => block.type === 'hero');

    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Homepage'}>
                <meta name="description" content={seo?.description || 'Welcome to Arteegroup, your partner in digital innovation.'} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>

            <main className="font-gotham">
                {/* ✅ Only render fallback HeroBlock if it's missing */}
                {!hasHeroBlock && <RenderBlock type="hero" />}
                <div className="mx-auto max-w-7xl px-12">
                    {blocks.map((block, i) => (
                        <div key={i}>
                            <RenderBlock type={block.type} data={block.data} />
                        </div>
                    ))}

                    <AboutUs />
                    <ClientLogos />
                    <OurWorks works={works} />
                </div>
            </main>
        </>
    );
};

Homepage.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default Homepage;
