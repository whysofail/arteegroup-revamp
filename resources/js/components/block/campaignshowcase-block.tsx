import { getRelativePath } from '@/lib/get-relative-path';
import { ICampaignShowcaseBlock } from '@/types/blocks.type';
import React from 'react';

const isVideo = (file: string) => {
    return /\.(mp4|mov|webm|ogg)$/i.test(file);
};

const CampaignShowcaseBlock: React.FC<ICampaignShowcaseBlock> = ({ data }) => {
    if (!data) return null;
    const mediaClass =
        'transition-transform duration-700 group-hover:scale-[1.02] lg:h-[140px] lg:w-auto lg:object-contain xl:h-[235px] desktop:h-[355px] 2xl:h-[400px]';

    return (
        <section className="text-white">
            <div className="mx-auto max-w-7xl space-y-8 px-8 py-4 md:py-8">
                {/* Header */}
                <div
                    className="prose prose-invert max-w-none prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: data.description,
                    }}
                />

                {/* Showcase */}

                <div>
                    <div className="flex flex-wrap justify-center gap-12">
                        {data.items?.map((item, index) => (
                            <div key={index} className="group flex flex-col lg:inline-flex lg:shrink-0 lg:items-center">
                                {/* Gallery */}
                                <div className="inline-flex gap-4">
                                    {item.media?.map((media, mediaIndex) => {
                                        const video = isVideo(media);

                                        return (
                                            <div key={mediaIndex} className="relative lg:shrink-0">
                                                {mediaIndex === 0 && (
                                                    <div className="absolute -left-6 -top-4 z-20">
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-black/60 text-xl font-bold text-white shadow-lg backdrop-blur-md">
                                                            {item.number}
                                                        </div>
                                                    </div>
                                                )}

                                                {video ? (
                                                    <video className={mediaClass} controls playsInline preload="metadata">
                                                        <source src={getRelativePath(media)} type="video/mp4" />
                                                    </video>
                                                ) : (
                                                    <img
                                                        src={getRelativePath(media)}
                                                        alt={item.title ?? `media-${mediaIndex}`}
                                                        loading="lazy"
                                                        className={mediaClass}
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* Caption */}
                                {item.caption && <p className="mt-4 text-center text-xs">{item.caption}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampaignShowcaseBlock;
