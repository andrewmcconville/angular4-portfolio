export interface IWork {
    name: string;
    name2?: string;
    description: string;
    date: string;
    role: string;
    hero: string;
    backgroundBlur?: string;
    gradient?: string;
    color?: string;
    url: string;

    media?: {};
    quote?: string;
    sections?: Array<{}>;
    link?: string;
    hires?: true;
}
