import WorkCard from '@/components/work/card-work';
import CategoryFilter from '@/components/work/category-filter';
import AppLayout from '@/layouts/app-layout';
import { IBlock } from '@/types/blocks.type';
import { ICategory, IWork, Paginated } from '@/types/data.type';
import { Head } from '@inertiajs/react';

interface WorkProps {
    seo?: {
        title?: string;
        description?: string;
        image?: string | null;
    };

    blocks: IBlock[];

    work: Paginated<IWork>;

    categories: ICategory[];

    filters: {
        category?: string;
    };

    divisions?: {
        name?: string;
        slug?: string;
        color?: string;
        background_url?: string;
    }[];
}

const layouts = [
    // Normal
    [
        'md:col-span-2 md:row-span-2', // 0 Hero left
        '', // 1
        '', // 2
        'md:row-span-2', // 3 Tall left
        '', // 4
        'md:col-span-2', // 5 Landscape right
    ],

    // Flipped
    [
        '', // 0
        '', // 1
        'md:col-span-2 md:row-span-2', // 2 Hero right
        '', // 3
        'md:row-span-2', // 4 Tall right
        'md:col-span-2', // 5 Landscape left
    ],
];

const getLayout = (workIndex: number) => {
    const group = Math.floor(workIndex / 6);
    const position = workIndex % 6;

    return layouts[group % 2][position];
};

const Work = ({ seo, work, categories, filters }: WorkProps) => {
    // const workMinItem = 100;
    // const workCopy = [...work.data];
    // while (workCopy.length < workMinItem) {
    //     workCopy.push(...work.data);
    // }
    // work.data = workCopy.slice(0, workMinItem);

    return (
        <>
            <Head title={seo?.title || 'Arteegroup - Homepage'} />

            <div className="font-gotham mx-auto max-w-7xl py-20 pt-32 md:py-12 md:pt-48">
                <h1 className="whitespace-pre-line text-7xl">
                    {`The work we do and
                    the people we help`}
                </h1>
                <div className="my-12">
                    <CategoryFilter categories={categories} selectedCategory={filters.category} />
                </div>
                {/* 
                <BentoGrid className="mx-auto max-w-7xl grid-flow-dense">
                    {work.data.map((item, index) => (
                        <>
                            <BentoGridWorkItem key={`${item.id}-${index}`} work={item} className={getLayout(index)} />
                        </>
                    ))}
                </BentoGrid> */}
                {
                    <div className="group/works grid grid-cols-1 gap-6 md:grid-cols-3">
                        {work.data.map((work) => (
                            <div key={work.id} className="h-full">
                                <WorkCard work={work} />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    );
};
Work.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default Work;
