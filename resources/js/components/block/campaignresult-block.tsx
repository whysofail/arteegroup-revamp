import React from 'react';
import { ICampaignResultBlock } from '@/types/blocks.type';

const CampaignResultBlock: React.FC<ICampaignResultBlock> = ({ data }) => {
    const totalResults = data?.results?.length || 0;

    const gridCols = [
        '',
        'lg:grid-cols-1',
        'lg:grid-cols-2',
        'lg:grid-cols-3',
        'lg:grid-cols-4',
        'lg:grid-cols-5',
    ];

    return (
        <section className="text-white">
            <div className="mx-auto max-w-7xl px-8 py-4 md:py-8">
                <div className="space-y-8">

                    <div className="space-y-4">
                        <div>
                            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                {data?.title || 'Result'}
                            </span>
                        </div>

                        {data?.description && (
                            <div
                                className="
                                prose prose-invert max-w-none leading-snug tracking-tight text-white
                            "
                                dangerouslySetInnerHTML={{
                                    __html: data.description,
                                }}
                            />

                        )}
                    </div>

                    <div className={`grid gap-8 ${gridCols[totalResults]}`}>
                        {data?.results?.map((item, index) => (
                            <div
                                key={index}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-zinc-700
                                    bg-white/[0.02]
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-brand
                                    hover:bg-white/[0.04]
                                    hover:shadow-[0_0_45px_rgba(255,126,29,.12)]
                                    ${totalResults > 3 ? 'lg:p-4' : 'lg:p-6'}
                                `}
                            >

                                {/* Glow */}

                                <div
                                    className="
                                            absolute
                                            inset-0
                                            opacity-0
                                            transition-opacity
                                            duration-300
                                            group-hover:opacity-100
                                            bg-[radial-gradient(circle_at_top_right,rgba(255,126,29,.08),transparent_60%)]
                                        "
                                />

                                <div className="relative">

                                    <h2
                                        className="
                                                text-4xl
                                                md:text-5xl
                                                font-black
                                                leading-none
                                                tracking-tight
                                            "
                                    >
                                        {item.value}
                                    </h2>

                                    <div className="mt-8">

                                        <div
                                            className="
                                                    h-px
                                                    w-full
                                                    bg-gradient-to-r
                                                    from-brand
                                                    to-transparent
                                                "
                                        />

                                        <p
                                            className="
                                                    mt-1
                                                    text-base
                                                    font-medium
                                                    text-white
                                                "
                                        >
                                            {item.title}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}


                    </div>

                </div>
            </div>
        </section >
    );
};

export default CampaignResultBlock;