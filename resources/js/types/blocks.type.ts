export interface IBlock {
    type: string;
    data?: Record<string, unknown>;
}

export interface IHeroBlock {
    data: {
        title?: string;
        subtitle?: string;
        image?: string;
        cta_text?: string;
        cta_url?: string;
        background_url?: string;
    };
}
