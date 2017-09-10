import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { WorkService } from './work/work.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'portfolio-root',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    menuStateOverride: string;
 
    constructor(
        private workService: WorkService
    ) { }

    ngOnInit(): void {
    }

    toggleMenuStateOverride(menuState): void {
        this.menuStateOverride = menuState;
    }
}
