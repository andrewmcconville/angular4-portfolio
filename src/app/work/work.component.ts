import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IWork } from './work.model';
import { WorkService } from './work.service';
import { PortfolioUIService } from '../portfolio-ui.service';

@Component({
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
    work: IWork;
    detailContainer: HTMLElement;
    currentWorkURL: string;
    scrollbarWidth: number;
    // appMenuOpen: boolean;

    constructor(
        private router: Router,
        private portfolioUIService: PortfolioUIService,
        private workService: WorkService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getWorkByRouteParam();

        this.detailContainer = document.getElementById('router-view');

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.detailContainer.scrollTop = 0;
        });

        this.scrollbarWidth = this.portfolioUIService.getScrollbarWidth();
    }

    getWorkByRouteParam(): void {
        this.activatedRoute.params.map((params: Params) => {
            return { url: params['url'] };
        }).subscribe((params: Params) => {
            this.work = this.workService.getWorkByURL(params.url);
            this.currentWorkURL = params.url;
        });
    }

    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }

    prevWork(): string {
        if(this.workService.getWorkPosition(this.currentWorkURL) === 'first') {
            return 'contact'
        } else {
            return this.workService.getPrevWorkURL(this.currentWorkURL);
        }
    }

    nextWork(): string {
        if(this.workService.getWorkPosition(this.currentWorkURL) === 'last') {
            return 'home'
        } else {
            return this.workService.getNextWorkURL(this.currentWorkURL);
        }
    }
}
