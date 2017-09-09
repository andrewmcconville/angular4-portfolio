import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
    detailContainer: HTMLElement;
 
    constructor(
        private router: Router,
        private workService: WorkService
    ) { }

    ngOnInit(): void {
        this.detailContainer = document.getElementById('router-view');
        
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.detailContainer.scrollTop = 0;
        });
    }

    toggleMenuStateOverride(menuState): void {
        this.menuStateOverride = menuState;
    }
}
