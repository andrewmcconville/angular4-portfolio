import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IWork } from './work.model';
import { WorkService } from './work.service';
import { PortfolioUIService } from '../portfolio-ui.service';

import { UniversalDesignQTipGripComponent } from './universal-design-q-tip-grip/universal-design-q-tip-grip.component';

@Component({
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
    work: IWork;

    constructor(
        private portfolioUIService: PortfolioUIService,
        private workService: WorkService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getWorkByRouteParam();
    }

    getWorkByRouteParam(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.work = this.workService.getWorkByURL(params.url);
        });
    }

    openAppMenu(): void {
        this.portfolioUIService.changeAppMenuOpen(true);
    }
}
