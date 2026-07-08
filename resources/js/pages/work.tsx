import AppLayout from '@/layouts/app-layout';
import { IBlock, IWork } from '@/types/blocks.type';
import { Head } from '@inertiajs/react';

interface WorkProps {
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

const Work = ({ seo, blocks, works, divisions }: WorkProps) => {
    console.log(works);
    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Homepage'}>
                <meta name="description" content={seo?.description || 'Welcome to Arteegroup, your partner in digital innovation.'} />
                {seo?.image && <meta property="og:image" content={seo.image} />}
            </Head>
            <div className="font-gotham mx-auto max-w-7xl px-8 py-20 pt-32 md:px-12 md:py-12 md:pt-48">
                <h1 className="whitespace-pre-line text-7xl">
                    {`The work we do and
                        the people we help`}
                </h1>
            </div>
        </>
    );
};

Work.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default Work;
