import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params, NavigationEnd } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PortfolioUIService } from './portfolio-ui.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'portfolio-root',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
    menuStateOverride: string;
    menuState: string;
    subscription: Subscription;
    detailContainer: HTMLElement;
 
    constructor(
        private portfolioUIService: PortfolioUIService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.subscription = this.portfolioUIService.getMenuState().subscribe(menuState => {
            this.menuState = menuState;
        });

        this.detailContainer = document.getElementById('router-view');
        
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.detailContainer.scrollTop = 0;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    toggleMenuStateOverride(menuState): void {
        this.menuStateOverride = menuState;
    }
}
