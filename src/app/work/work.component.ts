import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IWork } from './work.model';
import { WorkService } from './work.service';

@Component({
    templateUrl: './work.component.html',
    //styleUrls: ['./work-list.component.scss']
})
export class WorkComponent implements OnInit {
    work: IWork;
    detailContainer: HTMLElement;
    currentWorkURL: string;
    
    constructor(
        private router: Router,
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
    }

    getWorkByRouteParam(): void {
        this.activatedRoute.params.map((params: Params) => {
            return { url: params['url'] };
        }).subscribe((params: Params) => {
            this.work = this.workService.getWorkByURL(params.url);
            this.currentWorkURL = params.url;
        });
    }

    prevWork(): void {
        this.router.navigate([
            this.workService.getPrevWorkURL(this.currentWorkURL)
        ]);
    }

    nextWork(): void {
        this.router.navigate([
            this.workService.getNextWorkURL(this.currentWorkURL)
        ]);
    }
}
