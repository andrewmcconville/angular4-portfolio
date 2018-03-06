export interface IWork {
    name: string;
    description: string;
    introduction: string;
    date: string;
    backgroundBlur: string;
    url: string;

    media?: {};
    sections?: Array<{}>;
    link?: string;
}
