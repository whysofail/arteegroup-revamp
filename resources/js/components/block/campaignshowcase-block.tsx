import React from 'react';
import { getRelativePath } from '@/lib/get-relative-path';
import { ICampaignShowcaseBlock } from '@/types/blocks.type';

const isVideo = (file: string) => {
    return /\.(mp4|mov|webm|ogg)$/i.test(file);
};

const CampaignShowcaseBlock: React.FC<ICampaignShowcaseBlock> = ({ data }) => {
    if (!data) return null;

    return (
        <section className="text-white">
            <div className="mx-auto max-w-7xl px-8 py-4 md:py-8 space-y-8">

                {/* Header */}
                <div
                    className="prose prose-invert max-w-none prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: data.description,
                    }}
                />

                {/* Showcase */}

                <div>
                    <div className="gap-12 flex flex-wrap justify-center">

                        {data.items?.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col lg:inline-flex lg:items-center lg:shrink-0"
                            >
                                {/* Gallery */}
                                <div
                                    className="inline-flex gap-4"
                                >
                                    {item.media?.map((media, mediaIndex) => {

                                        const video = isVideo(media);

                                        return (
                                            <div
                                                key={mediaIndex}
                                                className="relative lg:shrink-0"
                                            >
                                                {mediaIndex === 0 && (
                                                    <div className="absolute -left-6 -top-4 z-20">
                                                        <div
                                                            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-black/60 backdrop-blur-md text-xl font-bold text-white shadow-lg"
                                                        >
                                                            {item.number}
                                                        </div>
                                                    </div>
                                                )}

                                                {video ? (

                                                    <video
                                                        className="lg:h-[140px] xl:h-[235px] lg:w-auto lg:object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                                        controls
                                                        playsInline
                                                        preload="metadata"
                                                    >
                                                        <source
                                                            src={getRelativePath(media)}
                                                            type="video/mp4"
                                                        />
                                                    </video>

                                                ) : (

                                                    <img
                                                        src={getRelativePath(media)}
                                                        alt={item.title ?? `media-${mediaIndex}`}
                                                        loading="lazy"
                                                        className="lg:h-[140px] xl:h-[235px] lg:w-auto lg:object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                                    />

                                                )}

                                            </div>
                                        );

                                    })}
                                </div>
                                {/* Caption */}
                                {item.caption && (

                                    <p
                                        className="mt-4 text-xs text-center"
                                    >
                                        {item.caption}
                                    </p>

                                )}
                            </div>

                        ))}
                    </div>

                </div>

            </div>

        </section>

    );
};

export default CampaignShowcaseBlock;