import { Component, OnInit } from '@angular/core';

import { IWork } from '../../work/work.model';
import { WorkService } from '../../work/work.service';
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public works: Array<IWork> = this.workService.getWorks();

    constructor(
        private portfolioUIService: PortfolioUIService,
        private workService: WorkService
    ) { }

    ngOnInit(): void {
    }

    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
