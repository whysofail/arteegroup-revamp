import { getRelativePath } from '@/lib/get-relative-path';
import { HeroDivisionProps } from '@/types/blocks.type';
import React from 'react';

const HeroDivisionBlock: React.FC<HeroDivisionProps> = ({ data, color, name }) => {
    const { title, subtitle, cta_text, cta_url, background_url } = data ?? {};

    return (
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center" style={{ backgroundColor: color }}>
            {/* Logo */}
            {background_url && (
                <img
                    src={getRelativePath(background_url)}
                    alt={name}
                    className="mb-12 h-72"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                />
            )}

            {/* Description */}
            {title && <p className="text-md mb-12 max-w-2xl leading-relaxed text-[#1E2738]">{title}</p>}
            {subtitle && <p className="text-md mb-12 max-w-2xl leading-relaxed text-[#1E2738]">{subtitle}</p>}

            {/* Button */}
            {cta_text && cta_url && (
                <a
                    href={cta_url}
                    className="text-md inline-block rounded-full bg-[#1E2738] px-6 py-3 text-white transition hover:bg-white hover:text-black"
                >
                    {cta_text}
                </a>
            )}
        </section>
    );
};

export default HeroDivisionBlock;
