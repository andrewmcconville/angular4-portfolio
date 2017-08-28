import { Injectable } from '@angular/core';

import { works } from '../api/works';
import { IWork } from './work.model';

@Injectable()
export class WorkService {

    constructor() { }

    getWorks(): Array<IWork> {
        return works;
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
}
