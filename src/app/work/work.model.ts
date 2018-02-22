export interface IWork {
    name: string;
    excerpt: string;
    introduction: string;
    date: string;
    defaultImage: string;
    url: string;

    media?: Array<any>;
    sections?: Array<{}>;
    link?: string;
}
