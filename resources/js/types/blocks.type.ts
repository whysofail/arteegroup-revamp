export interface IBlock {
    type: string;
    data?: Record<string, unknown>;
}

export interface IHeroBlock {
    data: {
        title?: string;
        subtitle?: string;
        cta_text?: string;
        cta_url?: string;
        background_url?: string;
    };
}

export interface IDivision {
    data: {
        title?: string;
        slug?: string;
        name?: string;
        color?: string;
    };
}

export interface IWork {
    data: {
        id: number;
        division_id?: number;
        name?: string;
        campaign?: string;
        campaign_name?: string;
        campaign_description?: string;
        campaign_image?: string;
        title?: string;
        slug?: string;
        seo_title?: string;
        seo_description?: string;
        seo_image?: string;
    };
}