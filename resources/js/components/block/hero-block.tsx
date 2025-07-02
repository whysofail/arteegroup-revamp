import { type HeroBlock as HeroBlockProps } from '@/types/blocks.type';
import React from 'react';

const HeroBlock: React.FC<HeroBlockProps> = ({ data }) => {
    const { title, subtitle, image, cta_text, cta_url, background_url } = data;

    return (
        <section className="relative bg-white px-6 py-20 text-center">
            {background_url && <img src={background_url} alt="Background" className="absolute inset-0 z-0 h-full w-full object-cover opacity-30" />}

            <div className="relative z-10 mx-auto max-w-3xl">
                <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{title}</h1>
                {subtitle && <p className="mt-4 text-lg text-gray-700 md:text-xl">{subtitle}</p>}
                {cta_text && cta_url && (
                    <a href={cta_url} className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
                        {cta_text}
                    </a>
                )}
                {image && (
                    <div className="mt-6">
                        <img src={image} alt="Hero Image" className="mx-auto max-h-64 w-auto" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroBlock;
