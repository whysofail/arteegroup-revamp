import { getRelativePath } from '@/lib/get-relative-path';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface OurWorksProps {
    works: {
        campaign_image?: string;
        name?: string;
        campaign?: string;
        campaign_name?: string;
        campaign_description?: string;
        is_highlighted?: boolean;
    }[];
    color?: string;
}

const OurWorks: React.FC<OurWorksProps> = ({ color, works }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // initial check
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const sortedWorks = [...works];
    const highlightIndex = sortedWorks.findIndex((work) => work.is_highlighted);

    if (highlightIndex !== -1) {
        const [highlighted] = sortedWorks.splice(highlightIndex, 1);
        const insertIndex = sortedWorks.length < 2 ? 0 : 2;
        sortedWorks.splice(insertIndex, 0, highlighted);
    }

    const hasHighlight = sortedWorks.some((w) => w.is_highlighted);
    const maxVisible = isMobile ? (showAll ? 5 : 2) : showAll ? (hasHighlight ? 9 : 10) : hasHighlight ? 5 : 4;
    const displayedWorks = sortedWorks.slice(0, Math.min(maxVisible, sortedWorks.length));

    const shouldShowButton = isMobile ? sortedWorks.length > 2 : sortedWorks.length > 5;

    if (displayedWorks.length === 0) {
        return (
            <section className="mx-auto mb-20 mt-20 max-w-7xl px-8">
                <div className="mb-6 text-sm font-medium" style={{ color }}>
                    Our works
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 py-16 text-center">
                    <p className="mb-2 text-xl font-semibold text-white">No works available</p>
                    <p className="text-sm text-zinc-400">Stay tuned! We'll showcase our campaigns here soon.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="mx-auto mb-20 mt-20 max-w-7xl px-8" id="#work">
            <div className="mb-6">
                <Link href="/our-works" className="text-sm font-medium hover:underline" style={{ color }}>
                    Our works
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <AnimatePresence>
                    {displayedWorks.map((work, idx) => {
                        const isHighlight = !isMobile && work.is_highlighted;

                        return (
                            <motion.div
                                key={work.campaign_name ?? '' + idx}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                                className={isHighlight ? 'md:col-span-2' : ''}
                            >
                                <img
                                    src={getRelativePath(work.campaign_image ?? '')}
                                    alt={work.name}
                                    className={`mb-3 w-full rounded-xl ${isHighlight ? 'h-[660px] md:h-[1320x]' : 'h-[165px] md:h-[330px]'} `}
                                />
                                <div className="mb-1 text-xs font-light text-white">
                                    {work.name} <span className="ml-2 text-zinc-400">{work.campaign}</span>
                                </div>
                                <h3 className="mb-1 font-bold text-white">{work.campaign_name}</h3>
                                <p className="text-sm text-zinc-400">{work.campaign_description}</p>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="mt-12 grid justify-center">
                {shouldShowButton && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="rounded-full px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                        style={{ backgroundColor: color }}
                    >
                        {showAll ? 'Show less' : 'View more'}
                    </button>
                )}
            </div>
        </section>
    );
};

export default OurWorks;