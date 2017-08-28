export interface IWork {
    name: string;
    excerpt: string;
    introduction: string;
    date: string;
    defaultImage: string;
    url: string;

    category?: string;
    images?: Array<any>;
    link?: string;
}
