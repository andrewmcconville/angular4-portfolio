import { Component, OnInit, Input } from "@angular/core";

import { IWork } from '../work/work.model';
import { WorkService } from '../work/work.service';
import { PortfolioUIService } from '../portfolio-ui.service';

@Component({
    selector: 'portfolio-work-list',
    templateUrl: './work-list.component.html',
    //styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
    public works: Array<IWork> = this.workService.getWorks();
    @Input() menuStateOverride: string;
    
    constructor(
        private portfolioUIService: PortfolioUIService,
        private workService: WorkService
    ) { }

    ngOnInit() {
    }
    
    closeAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(false);
    }
}
