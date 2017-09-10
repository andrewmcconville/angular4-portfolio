import { Component } from "@angular/core";
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './reading-list.component.html',
    //styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
    
    constructor(
        private portfolioUIService: PortfolioUIService,
    ) { }
    
    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
