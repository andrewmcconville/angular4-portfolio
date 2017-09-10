import { Component } from "@angular/core";
import { PortfolioUIService } from '../../portfolio-ui.service';

@Component({
    templateUrl: './resume.component.html',
    //styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

    constructor(
        private portfolioUIService: PortfolioUIService,
    ) { }
    
    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
