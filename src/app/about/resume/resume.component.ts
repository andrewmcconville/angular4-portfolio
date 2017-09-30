import { Component, OnInit } from '@angular/core';
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    scrollbarWidth: number;

    constructor(
        private portfolioUIService: PortfolioUIService,
    ) { }
    
    ngOnInit(): void {
        this.scrollbarWidth = this.portfolioUIService.getScrollbarWidth();
    }
    
    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
