import { useEffect, useState } from 'react';

interface WorkItem {
    brand: string;
    category: string;
    title: string;
    desc: string;
    image: string;
}

interface OurWorksProps {
    color?: string;
}

const works: WorkItem[] = [
    {
        brand: 'Royal by Belfoods',
        category: 'Campaign',
        title: 'Rival become Viral',
        desc: 'We create a “grand entrance” for Dian Sastrowardoyo as Royal’s Brand Ambassador. When we already get all the attention, and people...',
        image: '/rivalbecomeviral.png',
    },
    {
        brand: 'MR.DIY',
        category: 'Activity Campaign',
        title: 'Urusan Cuan',
        desc: 'Audience engagement and loyalty program will never be the same.',
        image: '/urusancuan.jpg',
    },
    {
        brand: 'Royal by Belfoods',
        category: 'Campaign',
        title: 'Rival become Viral',
        desc: 'We create a “grand entrance” for Dian Sastrowardoyo as Royal’s Brand Ambassador. When we already get all the attention, and people...',
        image: '/rivalbecomeviral.png',
    },
    {
        brand: 'Royal by Belfoods',
        category: 'Campaign',
        title: 'Rival become Viral',
        desc: 'We create a “grand entrance” for Dian Sastrowardoyo as Royal’s Brand Ambassador. When we already get all the attention, and people...',
        image: '/rivalbecomeviral.png',
    },
    {
        brand: 'MR.DIY',
        category: 'Activity Campaign',
        title: 'Urusan Cuan',
        desc: 'Audience engagement and loyalty program will never be the same.',
        image: '/urusancuan.jpg',
    },
];

const OurWorks: React.FC<OurWorksProps> = ({ color }) => {
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
                                src={work.image}
                                alt={work.title}
                                className={`
                                    mb-3 w-full rounded-xl 
                                    ${isHighlight ? 'h-[660px] md:h-[1320x]' : 'h-[165px] md:h-[330px]'}
                                `}
                            />
                            <div className="mb-1 text-xs font-light text-white">
                                {work.brand}{' '}
                                <span className="ml-2 text-zinc-400">{work.category}</span>
                            </div>
                            <h3 className="mb-1 font-bold text-white">{work.title}</h3>
                            <p className="text-sm text-zinc-400">{work.desc}</p>
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