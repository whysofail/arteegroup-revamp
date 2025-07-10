import HeroDivisionSection from '@/components/division/hero-division';
import OurWorks from '@/components/division/our-works';
import Project from '@/components/division/project';
import AppLayout from '@/layouts/app-layout';
import { IBlock } from '@/types/blocks.type';
import { Head } from '@inertiajs/react';

interface DivisionProps {
    name?: string;
    color?: string;
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

const Division = ({ seo, blocks, color, name, works }: DivisionProps) => {

    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Division'}>
                <meta name="description" content={seo?.description || 'Dummy description'} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>
            <div className="font-gotham bg-black">
                <HeroDivisionSection data={blocks.find((block) => block.type === 'hero')?.data || {}} color={color} name={name} />
                <OurWorks color={color} works={works} />
                <Project color={color} />
            </div>
        </>
    );
};
Division.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default Division;