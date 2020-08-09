import { Component, OnInit } from '@angular/core';
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    constructor(
        private portfolioUIService: PortfolioUIService,
    ) { }

    ngOnInit(): void {
    }

    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
