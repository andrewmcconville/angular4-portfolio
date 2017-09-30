import { Component, OnInit } from '@angular/core';
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './reading-list.component.html',
    styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {
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
