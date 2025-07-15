import HeroDivisionSection from '@/components/block/hero-division-block';
import OurWorks from '@/components/division/our-works';
import Project from '@/components/division/project';
import AppLayout from '@/layouts/app-layout';
import { IBlock, IWork } from '@/types/blocks.type';
import { Head } from '@inertiajs/react';

interface DivisionProps {
    divisionId: number;
    name?: string;
    color?: string;
    seo?: {
        title?: string;
        description?: string;
        image?: string | null;
    };
    blocks: IBlock[];
    works: IWork[];
}

const Division = ({ seo, blocks, divisionId, color, name, works }: DivisionProps) => {
    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Division'}>
                <meta name="description" content={seo?.description || 'Dummy description'} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>
            <div className="font-gotham bg-black">
                <HeroDivisionSection data={blocks.find((block) => block.type === 'hero')?.data || {}} color={color} name={name} />
                <OurWorks color={color} works={works} />
                <Project color={color} divisionId={divisionId} />
            </div>
        </>
    );
};
Division.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default Division;
