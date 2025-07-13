import { ISectionParagraphBlock } from '@/types/blocks.type';
import { Link } from '@inertiajs/react';
import React from 'react';

const SectionParagraphBlock: React.FC<ISectionParagraphBlock> = ({ data }) => {
    const fallbackTitle = 'About us';
    const fallbackContent = `
        <h2>
            In the mystical city of Jakarta,<br class="md:hidden" /> a group of talented magicians united with a shared goal: to transform digital marketing.
        </h2>
        <p>
            In 2017, Artee Group was born, inspired by the Indonesian word <i>“arti”</i>. Our collective of digital enthusiast,
            creative thinkers, and strategic planners set out on a mission to
            <i class="text-brand font-semibold"> bring meaningful and loud ideas with solid results</i>, transforming the ordinary
            into the extraordinary and crafting stories that resonate and endure.
        </p>
    `;
    const fallbackDirection = 'ltr';

    const title = data?.title?.trim() || fallbackTitle;
    const content = data?.content?.trim() || fallbackContent;
    const direction = data?.direction || fallbackDirection;

    const isRTL = direction === 'rtl';

    return (
        <section className={`py-8 md:py-16 text-white ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="mx-auto max-w-7xl px-8">
            <div dir={direction} className="mb-10 gap-4 md:grid md:grid-cols-5">
                {/* Title */}
                <div className={`md:col-span-1 ${isRTL ? 'justify-end md:order-2' : 'justify-start md:order-1'}`}>
                    <Link href="#" className="text-brand whitespace-nowrap text-sm font-medium hover:underline">
                        {title}
                    </Link>
                </div>

                {/* Content */}
                <div className={`md:col-span-4 ${isRTL ? 'md:order-1 md:text-right' : 'md:order-2 md:text-justify'}`}>
                    <div
                        className="prose prose-invert max-w-none leading-snug tracking-tight text-white"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </div>
        </section>
    );
};

export default SectionParagraphBlock;