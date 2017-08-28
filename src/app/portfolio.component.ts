import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, Params } from '@angular/router';
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
 
    constructor(
        private portfolioUIService: PortfolioUIService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.subscription = this.portfolioUIService.getMenuState().subscribe(menuState => {
            this.menuState = menuState;
        });

        //this.setMenuState('work');
        //console.log(this.router);
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    setMenuState(menuState): void {
        this.portfolioUIService.setMenuState(menuState);
    }

    toggleMenuStateOverride(menuState): void {
        this.menuStateOverride = menuState;
        console.log(this.menuStateOverride);
    }
}
