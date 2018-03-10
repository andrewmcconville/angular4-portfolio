import { Component, Input } from '@angular/core';

import { IWork } from '../work/work.model';
import { WorkService } from '../work/work.service';
import { PortfolioUIService } from '../portfolio-ui.service';

@Component({
    selector: 'portfolio-app-menu',
    templateUrl: './app-menu.component.html'
})
export class AppMenuComponent {
    public works: Array<IWork> = this.workService.getWorks();

    constructor(
        private portfolioUIService: PortfolioUIService,
        private workService: WorkService
    ) {}

    closeAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(false);
    }
}
