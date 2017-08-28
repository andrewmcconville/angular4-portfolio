import { Component, OnInit } from "@angular/core";

import { IWork } from '../work/work.model';
import { WorkService } from '../work/work.service';

@Component({
    selector: 'portfolio-work-list',
    templateUrl: './work-list.component.html',
    //styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
    public works: Array<IWork> = this.workService.getWorks();
    
    constructor(
        private workService: WorkService
    ) { }

    ngOnInit() {
    }
}
