import { getRelativePath } from '@/lib/get-relative-path';
import { type IHeroBlock } from '@/types/blocks.type';
import React from 'react';

const isVideo = (url: string | undefined): boolean => {
    if (!url) return false;
    return /\.(mp4|webm|ogg)$/i.test(url);
};

const HeroBlock: React.FC<IHeroBlock> = ({ data }) => {
    const { title, subtitle, cta_text, cta_url, background_url } = data ?? {};

    const fallbackTitle = 'Create impact through meaningful and loud ideas, with a solid result';
    const fallbackCTA = 'Explore our work';
    const fallbackURL = 'http://127.0.0.1:8000/';
    const fallbackBackground = '/moon.gif';

    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            {isVideo(background_url ?? fallbackBackground) ? (
                <video
                    src={getRelativePath(background_url ?? fallbackBackground)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                />
            ) : (
                <img
                    src={getRelativePath(background_url ?? fallbackBackground)}
                    alt="Background"
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                />
            )}

            <div className="absolute bottom-10 left-0 z-10 w-full sm:bottom-24">
                <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <h1 className="mb-4 max-w-md text-base leading-relaxed text-white drop-shadow-md sm:max-w-lg sm:text-lg md:max-w-xl md:text-4xl md:leading-snug">
                        {title ?? fallbackTitle}
                    </h1>
                    {subtitle && <p className="mb-6 text-lg drop-shadow-sm">{subtitle}</p>}

                    <a
                        href={cta_url ?? fallbackURL}
                        className="bg-brand inline-block rounded-full px-6 py-3 text-white transition hover:bg-white hover:text-black"
                    >
                        {cta_text ?? fallbackCTA}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroBlock;
