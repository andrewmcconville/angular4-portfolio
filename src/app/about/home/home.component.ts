import { Component } from "@angular/core";
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './home.component.html',
    //styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
    constructor(
        private portfolioUIService: PortfolioUIService,
    ) { }
    
    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
