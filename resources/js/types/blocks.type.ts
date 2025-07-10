export interface IBlock {
    type: string;
    data?: Record<string, unknown>;
}

export interface IHeroBlock {
    data?: {
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

export interface HeroDivisionProps {
    data?: IHeroBlock['data'] & IDivision['data'];
    color?: string;
    name?: string;
}

export interface ISectionParagraphBlock {
    data?: {
        title?: string; // Used for the left anchor/link
        content?: string; // HTML string for the right column content
        direction: 'ltr' | 'rtl'; // Text direction, default is 'ltr'
    };
}

export interface IWysiwygBlock {
    data?: {
        content?: string; // HTML string
    };
}

export interface IImageMarqueeBlock {
    data?: {
        images?: string[]; // array of image URLs
        speed?: number; // scroll duration in seconds, default 20
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
