import { getRelativePath } from '@/lib/get-relative-path';
import { IWork } from '@/types/data.type';
import { Link } from '@inertiajs/react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface WorkCardProps {
    work: IWork;
}

const containerVariants = {
    initial: {},
    hover: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const badgeVariants = {
    initial: {
        y: -50,
        scale: 0.9,
        opacity: 0,
    },
    hover: {
        y: [-50, 10, 0],
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring' as const,
            y: {
                duration: 0.25,
                ease: 'easeOut',
            },

            scale: {
                type: 'spring',
                stiffness: 500,
                damping: 22,
            },
        },
    },
};

const SubCategoryBadge = ({ subCategory }: { subCategory: IWork['sub_categories'] }) => {
    if (!subCategory?.length) return null;

    return (
        <motion.div variants={containerVariants} className="absolute left-2 top-4 flex flex-col items-start gap-2">
            {subCategory.map((sub) => (
                <motion.div key={sub.id} variants={badgeVariants} className="rounded-xl bg-black px-3 py-1 text-white">
                    <p className="text-xs font-bold">{sub.name}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default function WorkCard({ work }: WorkCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Link
            className="group/card relative z-0 transition-all hover:z-20 hover:!opacity-100 group-hover/works:opacity-50"
            href={`/works/${work.slug ?? ''}`}
        >
            {' '}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex h-full flex-col"
            >
                <motion.div
                    initial="initial"
                    whileHover="hover"
                    className="relative z-0 aspect-square overflow-hidden transition-all duration-300 hover:z-20 hover:-translate-y-2"
                >
                    <img
                        src={getRelativePath(work.campaign_image ?? undefined)}
                        alt={work.name}
                        className="group-hover/works:brightness-40 group-hover/card:saturate-125 absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover/card:scale-[1.03] group-hover/card:brightness-100 group-hover/card:contrast-100"
                    />
                    x{/* Overlay */}
                    <SubCategoryBadge subCategory={work.sub_categories} />
                </motion.div>

                <div className="mt-0 space-y-1">
                    <div className="mt-2 flex min-h-[88px] flex-col gap-[0.5]">
                        <h3 className="group-hover:text-brand line-clamp-2 justify-start text-2xl font-bold leading-tight transition">
                            {work.campaign_name}
                        </h3>

                        {work.campaign_description && <p className="line-clamp-2 text-gray-300">{work.campaign_description}</p>}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
