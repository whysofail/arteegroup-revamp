import { Link } from '@inertiajs/react';

const logos = [
    { src: '/divisi.png', alt: 'Cikal Bakal', href: '#' },
    { src: '/divisi.png', alt: 'Hiruk Pikuk', href: '#' },
    { src: '/divisi.png', alt: 'Serba Serbi', href: '#' },
    { src: '/divisi.png', alt: 'Sorak Sorai', href: '#' },
    { src: '/divisi.png', alt: 'Kotak Katik', href: '#' },
];

export default function AboutUs() {
    return (
        <section className="px-6 py-16 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-10 grid gap-4 grid-cols-5">
                    {/* Title di kiri (1 kolom penuh) */}
                    <div className="col-span-1">
                        <Link href="#" className="mb-2 text-sm font-medium text-brand hover:underline">
                            About us
                        </Link>
                    </div>

                    {/* Deskripsi sejajar mulai dari kolom ke-2 */}
                    <div className="col-span-4 mb-10 text-justify">
                        <h2 className="leading-snug font-bold text-3xl">
                            In the mystical city of Jakarta, a group of talented magicians united with a shared goal: to transform digital marketing.
                        </h2>
                        <p className="text-base leading-relaxed">
                            In 2017, Artee Group was born, inspired by the Indonesian word <i>“arti”</i>. Our collective of digital enthusiast,
                            creative thinkers, and strategic planners set out on a mission to
                            <i className="font-semibold text-brand"> bring meaningful and loud ideas with solid results</i>, transforming
                            the ordinary into the extraordinary and crafting stories that resonate and endure.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 grid-cols-5">
                    {logos.map((logo, i) => (
                        <Link key={i} href={logo.href} className="transition hover:scale-105">
                            <img src={logo.src} alt={logo.alt} className="block rounded-xl grayscale transition hover:grayscale-0" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}