import { getRelativePath } from '@/lib/get-relative-path';
import { Link } from '@inertiajs/react';
import React from 'react';

interface SectionHeroProps {
    name: string;
    campaignDescription: string;
    campaignImage: string;
    division: string;
    divisionSlug: string;
    subCategories: string;
    category: string;
    categorySlug: string;
    campaign: string;
    campaignName: string;
}

const SectionHeroWork: React.FC<SectionHeroProps> = ({ name, campaignDescription, campaignImage, division, divisionSlug, category, categorySlug, subCategories, campaign, campaignName }) => {
    return (
        <section className="py-16 text-white md:mt-24 md:py-8">
            <div className="mx-auto max-w-7xl md:px-20 px-8 pb-16">
                {/* Back Button */}
                <Link
                    href="/works"
                    className="mb-12 inline-flex items-center text-sm font-medium text-brand transition hover:opacity-80"
                >
                    ← View all projects
                </Link>

                {/* Header */}
                <div className="grid gap-16 lg:grid-cols-5">
                    {/* Left */}
                    <div className="lg:col-span-2 space-y-4">
                        <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                            {name}
                        </span>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            {campaignName}
                        </h1>
                    </div>

                    {/* Right */}
                    <div className="space-y-8 lg:col-span-3">
                        <div className="grid gap-8 md:grid-cols-4">
                            {/* Category */}
                            <div>
                                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                    Service
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    <span
                                        className="rounded-full border border-zinc-700 px-3 py-1 text-sm"
                                    >
                                        {campaign}
                                    </span>
                                </div>
                            </div>

                            {/* Sub Category */}
                            <div>
                                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                    industry
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    <span
                                        className="rounded-full border border-zinc-700 px-3 py-1 text-sm"
                                    >
                                        {subCategories}
                                    </span>
                                </div>
                            </div>

                            {/* Category */}
                            <div>
                                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                    Category
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    <Link
                                        href={`/works?category=${categorySlug}`}
                                        className="rounded-full border border-zinc-700 px-3 py-1 text-sm transition hover:bg-zinc-700"
                                    >
                                        {category}
                                    </Link>
                                </div>
                            </div>

                            {/* Division */}
                            <div>
                                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                    Division
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    <Link
                                        href={`/division/${divisionSlug}`}
                                        className="rounded-full border border-zinc-700 px-3 py-1 text-sm transition hover:bg-zinc-700"
                                    >
                                        {division}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-base leading-8 text-zinc-300 md:text-lg">
                                {campaignDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex h-64 items-center justify-center md:h-screen">
                <img
                    src={getRelativePath(campaignImage)}
                    alt="Background Animation"
                    className="absolute z-0 h-full w-full object-cover"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </div>
        </section>
    );
};

export default SectionHeroWork;
