import { Component, OnInit } from '@angular/core';

import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(
        private portfolioUIService: PortfolioUIService,
    ) { }

    ngOnInit(): void {
    }

    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
