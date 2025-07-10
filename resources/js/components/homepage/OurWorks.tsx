import { getRelativePath } from '@/lib/get-relative-path';
import { useEffect, useState } from 'react';

interface OurWorksProps {
    works: {
        campaign_image?: string;
        name?: string;
        campaign?: string;
        campaign_name?: string;
        campaign_description?: string;
    }[];
}

const OurWorks: React.FC<OurWorksProps> = ({ works }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // initial check
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const maxVisible = isMobile ? (showAll ? 5 : 2) : showAll ? 10 : 4;
    const displayedWorks = works.slice(0, Math.min(maxVisible, works.length));

    const shouldShowButton = isMobile ? works.length > 2 : works.length > 4;

    return (
        <section className="mx-auto mb-20 max-w-7xl px-8" id="#work">
            <div className="text-brand mb-6 text-sm font-medium">Our works</div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {displayedWorks.map((work, idx) => (
                    <div key={idx}>
                        <img
                            src={getRelativePath(work.campaign_image ?? '')}
                            alt={work.name}
                            className="mb-3 h-[165px] w-full rounded-xl md:h-[329.85px]"
                        />
                        <div className="mb-1 text-xs font-light text-white">
                            {work.name} <span className="ml-2 text-zinc-400">{work.campaign}</span>
                        </div>
                        <h3 className="mb-1 font-bold text-white">{work.campaign_name}</h3>
                        <p className="text-sm text-zinc-400">{work.campaign_description}</p>
                    </div>
                ))}
            </div>

            {shouldShowButton && (
                <div className="mt-12 grid justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-brand rounded-full px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                    >
                        {showAll ? 'Show less' : 'View more'}
                    </button>
                </div>
            )}
        </section>
    );
};

export default OurWorks;
