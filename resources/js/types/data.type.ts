export interface ICategory {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;

    sub_categories?: ISubCategory[];
}

export interface ISubCategory {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    description: string | null;
    created_at: string;
    updated_at: string;

    category?: ICategory;
    works?: IWork[];
}

export interface IDivision {
    id: number;

    title: string | null;
    seo_title: string | null;
    seo_description: string | null;
    seo_image: string | null;

    name: string;
    color: string;
    slug: string | null;

    blocks: unknown[] | null;
    custom_css: string | null;

    created_at: string;
    updated_at: string;
}

export interface IWork {
    id: number;
    name: string;
    slug: string;

    campaign?: string | null;
    campaign_name?: string | null;
    campaign_description?: string | null;
    campaign_image?: string | null;

    blocks: unknown[]; // Replace with a specific block type if you have one
    is_highlighted: boolean;

    created_at: string;
    updated_at: string;

    divisions?: IDivision[];
    sub_categories?: ISubCategory[];
}
