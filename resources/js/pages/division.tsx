import HeroDivisionSection from '@/components/block/hero-division-block';
import OurWorks from '@/components/division/our-works';
import Project from '@/components/division/project';
import AppLayout from '@/layouts/app-layout';
import { IBlock, IWork } from '@/types/blocks.type';
import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';
import { getBlockCustom } from '@/lib/get-custom-rich-text';

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
    const custom = getBlockCustom(blocks);

    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Division'}>
                <meta name="description" content={seo?.description || 'Dummy description'} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>
            <div className="division-page font-gotham">
                <HeroDivisionSection data={blocks.find((block) => block.type === 'hero')?.data || {}} color={color} name={name} custom={custom} />
                <OurWorks color={color} works={works} custom={custom} />
                <Project color={color} divisionId={divisionId} custom={custom} />
            </div>
        </>
    );
};

// No props, just inject the page
Division.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;

export default Division;
