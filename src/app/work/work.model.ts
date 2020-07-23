export interface IWork {
    name: string;
    name2?: string;
    description: string;
    date: string;
    backgroundBlur: string;
    url: string;

    media?: {};
    quote?: string;
    sections?: Array<{}>;
    link?: string;
    hires?: true;
}
