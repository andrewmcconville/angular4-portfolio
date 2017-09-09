import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IWork } from './work.model';
import { WorkService } from './work.service';
import { PortfolioUIService } from '../portfolio-ui.service';

@Component({
    templateUrl: './work.component.html',
    //styleUrls: ['./work-list.component.scss']
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
        //this.portfolioUIService.setMenuState('work');
    }

    getWorkByRouteParam(): void {
        this.activatedRoute.params.map((params: Params) => {
            return { url: params['url'] };
        }).subscribe((params: Params) => {
            this.work = this.workService.getWorkByURL(params.url);
        });
    }
}
