import { Injectable } from '@angular/core';

import { works } from '../api/works';
import { IWork } from './work.model';

@Injectable()
export class WorkService {

    constructor() { }

    getWorks(): Array<IWork> {
        return works;
    }

    getWorkPosition(url: string): string {
        let workPosition: string;
        let workIndex: number;

        works.map((work: IWork, index: number) => {
            if (work.url === url) {
                workIndex = index;
            }
        });

        if (workIndex === 0) {
            workPosition = 'first';
        } else if (workIndex === works.length - 1) {
            workPosition = 'last';
        } else {
            workPosition = workIndex.toString();
        }

        return workPosition
    }

    getFirstWorkURL(): string {
        return works[0].url;
    }

    getLastWorkURL(): string {
        return works[works.length - 1].url;
    }

    getWorkByURL(url: string): IWork {
        let match: IWork;

        works.map((work: IWork) => {
            if (work.url === url) {
                match = work;
            }
        });

        return match;
    }

    getPrevWorkURL(url: string): string {
        let nextURL: string;
        let workIndex: number;

        works.map((work: IWork, index: number) => {
            if (work.url === url) {
                workIndex = index;
            }
        });

        if (workIndex <= 0) {
            nextURL = works[works.length - 1].url;
        } else {
            nextURL = works[workIndex - 1].url;
        }

        return nextURL;
    }

    getNextWorkURL(url: string): string {
        let nextURL: string;
        let workIndex: number;

        works.map((work: IWork, index: number) => {
            if (work.url === url) {
                workIndex = index;
            }
        });

        if (workIndex >= works.length - 1) {
            nextURL = works[0].url;
        } else {
            nextURL = works[workIndex + 1].url;
        }

        return nextURL;
    }
}
