import { IImageMarqueeBlock } from '@/types/blocks.type';
import React from 'react';

const ImageMarqueeBlock: React.FC<IImageMarqueeBlock> = ({ data }) => {
    const { images = [], speed = 20 } = data ?? {};

    if (images.length === 0) return null;

    // Duplicate images for seamless scroll
    const marqueeImages = [...images, ...images];

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-flex" style={{ animationDuration: `${speed}s` }}>
                {marqueeImages.map((src, i) => (
                    <img key={i} src={src} alt={`marquee-${i}`} className="mr-6 inline-block h-24 w-auto object-contain" loading="lazy" />
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation-name: marquee;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    animation-fill-mode: forwards;
                    animation-play-state: running;
                }
            `}</style>
        </div>
    );
};

export default ImageMarqueeBlock;
