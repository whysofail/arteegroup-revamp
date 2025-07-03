interface WorkItem {
    brand: string;
    category: string;
    title: string;
    desc: string;
    image: string;
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
];

export default function OurWorks() {
    const repeated = [...works, ...works];

    return (
        <section className="mx-auto mb-20 max-w-7xl px-8">
            <div className="mb-6 text-sm font-medium text-brand">Our works</div>

            <div className="grid gap-10 grid-cols-2">
                {repeated.map((work, idx) => (
                    <div key={idx}>
                        <img src={work.image} alt={work.title} className="mb-3 h-[329.85px] w-full rounded-xl" />
                        <div className="mb-1 text-xs font-light text-white">
                            {work.brand} <span className="ml-2 text-zinc-400">{work.category}</span>
                        </div>
                        <h3 className="mb-1 text-white font-bold">{work.title}</h3>
                        <p className="text-sm text-zinc-400">{work.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 grid justify-center">
                <a href="#works" className="rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black">
                    View more
                </a>
            </div>
        </section>
    );
}