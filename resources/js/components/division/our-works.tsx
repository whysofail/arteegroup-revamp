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
    color?: string;
}

const OurWorks: React.FC<OurWorksProps> = ({ color, works }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // initial check
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const displayedWorks = isMobile ? works.slice(0, 2) : works;

    return (
        <section className="mx-auto mt-20 mb-20 max-w-7xl px-8" id="#work">
            <div className="text-brand mb-6 text-sm font-medium" style={{ color }}>Our works</div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {displayedWorks.map((work, idx) => {
                    const isHighlight = !isMobile && idx === 2;

                    return (
                        <div
                            key={idx}
                            className={isHighlight ? 'md:col-span-2' : ''}
                        >
                            <img
                                src={getRelativePath(work.campaign_image ?? '')}
                                alt={work.name}
                                className={`
                                    mb-3 w-full rounded-xl 
                                    ${isHighlight ? 'h-[660px] md:h-[1320x]' : 'h-[165px] md:h-[330px]'}
                                `}
                            />
                            <div className="mb-1 text-xs font-light text-white">
                                {work.name}{' '}
                                <span className="ml-2 text-zinc-400">{work.campaign}</span>
                            </div>
                            <h3 className="mb-1 font-bold text-white">{work.campaign_name}</h3>
                            <p className="text-sm text-zinc-400">{work.campaign_description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 grid justify-center">
                <a
                    href="#works"
                    className="rounded-full px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                    style={{ backgroundColor: color }}
                >
                    View more
                </a>
            </div>
        </section>
    );
}

export default OurWorks;