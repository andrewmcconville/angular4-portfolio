import { Component, Input } from "@angular/core";
import { PortfolioUIService } from '../portfolio-ui.service';

@Component({
    selector: 'portfolio-about-list',
    templateUrl: './about-list.component.html',
    //styleUrls: ['./about-list.component.scss']
})
export class AboutListComponent {
    @Input() menuStateOverride: string;

    constructor(
        private portfolioUIService: PortfolioUIService
    ) {}
    
    closeAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(false);
    }
}
