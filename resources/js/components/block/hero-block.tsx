import { getRelativePath } from '@/lib/get-relative-path';
import { type IHeroBlock } from '@/types/blocks.type';
import React from 'react';

const isVideo = (url: string | undefined): boolean => {
    if (!url) return false;
    return /\.(mp4|webm|ogg)$/i.test(url);
};

const HeroBlock: React.FC<IHeroBlock> = ({ data }) => {
    const { title, subtitle, cta_text, cta_url, background_url } = data;

    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            {background_url &&
                (isVideo(background_url) ? (
                    <video
                        src={getRelativePath(background_url)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 z-0 h-full w-full object-cover"
                    />
                ) : (
                    <img src={background_url} alt="Background" className="absolute inset-0 z-0 h-full w-full object-cover" />
                ))}

            <div className="absolute bottom-24 left-0 z-10 w-full">
                <div className="mx-auto max-w-7xl px-8 text-white">
                    {title && <h1 className="mb-4 max-w-xl text-4xl font-bold drop-shadow-md">{title}</h1>}
                    {subtitle && <p className="mb-6 text-lg drop-shadow-sm">{subtitle}</p>}
                    {cta_text && cta_url && (
                        <a
                            href={cta_url}
                            className="bg-brand inline-block rounded-full px-6 py-3 text-white transition hover:bg-white hover:text-black"
                        >
                            {cta_text}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroBlock;
