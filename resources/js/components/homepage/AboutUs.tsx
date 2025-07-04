import { Link } from '@inertiajs/react';

const logos = [
    { src: '/divisi.png', alt: 'Cikal Bakal', href: '#' },
    { src: '/divisi.png', alt: 'Hiruk Pikuk', href: '#' },
    { src: '/divisi.png', alt: 'Serba Serbi', href: '#' },
    { src: '/divisi.png', alt: 'Sorak Sorai', href: '#' },
    { src: '/divisi.png', alt: 'Kotak Katik', href: '#' },
];

const mobileLogos = [
    { src: '/cikalbakal.png', bgColor: '#F7A93B', alt: 'Cikal Bakal', href: '#' },
    { src: '/hirukpikuk.png', bgColor: '#0D615B', alt: 'Hiruk Pikuk', href: '#' },
    { src: '/soraksorai.png', bgColor: '#302149', alt: 'Sorak Sorai', href: '#' },
    { src: '/serbaserbi.png', bgColor: '#D5CDC2', alt: 'Serba Serbi', href: '#' },
    { src: '/kotakkatik.png', bgColor: '#E1E1E1', alt: 'Kotak Katik', href: '#' },
];

export default function AboutUs() {
    return (
        <section className="py-16 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-10 gap-4 md:grid md:grid-cols-5">
                    {/* Title di kiri (1 kolom penuh) */}
                    <div className="md:col-span-1">
                        <Link href="#" className="text-brand text-sm font-medium hover:underline">
                            About us
                        </Link>
                    </div>

                    {/* Deskripsi sejajar mulai dari kolom ke-2 */}
                    <div className="mt-4 mb-10 md:col-span-4 md:mt-0 md:text-justify">
                        <h2 className="text-xl leading-snug font-bold md:text-3xl">
                            In the mystical city of Jakarta,
                            <br className="md:hidden" /> a group of talented magicians united with a shared goal: to transform digital marketing.
                        </h2>
                        <p className="mt-4 text-xs leading-relaxed md:mt-0 md:text-base">
                            In 2017, Artee Group was born, inspired by the Indonesian word <i>“arti”</i>. Our collective of digital enthusiast,
                            creative thinkers, and strategic planners set out on a mission to
                            <i className="text-brand font-semibold"> bring meaningful and loud ideas with solid results</i>, transforming the ordinary
                            into the extraordinary and crafting stories that resonate and endure.
                        </p>
                    </div>
                </div>

                {/* Logo Desktop */}
                <div className="hidden grid-cols-5 gap-6 md:grid">
                    {logos.map((logo, i) => (
                        <Link key={i} href={logo.href} className="transition hover:scale-105">
                            <img src={logo.src} alt={logo.alt} className="block rounded-xl grayscale transition hover:grayscale-0" />
                        </Link>
                    ))}
                </div>

                {/* Logo Mobile */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                    {mobileLogos.map((logo, i) => (
                        <Link
                            key={i}
                            href={logo.href}
                            className="flex h-36 items-center justify-center rounded-xl grayscale transition hover:scale-105 hover:grayscale-0"
                            style={{ backgroundColor: logo.bgColor }}
                        >
                            <img src={logo.src} alt={logo.alt} className="max-h-24" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}