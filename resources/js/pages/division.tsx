import HeroDivisionSection from '@/components/block/hero-division-block';
import OurWorks from '@/components/division/our-works';
import Project from '@/components/division/project';
import AppLayout from '@/layouts/app-layout';
import { IBlock, IWork } from '@/types/blocks.type';
import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';

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
    custom_css?: string;
}
const Division = ({ seo, blocks, divisionId, color, name, works, custom_css }: DivisionProps) => {
    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Division'}>
                <meta name="description" content={seo?.description || 'Dummy description'} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>
            {custom_css && <style dangerouslySetInnerHTML={{ __html: custom_css }} />}
            <div className="division-page font-gotham">
                <HeroDivisionSection data={blocks.find((block) => block.type === 'hero')?.data || {}} color={color} name={name} />
                <OurWorks color={color} works={works} />
                <Project color={color} divisionId={divisionId} />
            </div>
        </>
    );
};

// No props, just inject the page
Division.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;

export default Division;
