import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { routing, portfolioRoutingProviders } from './portfolio.routes';

import { PortfolioComponent } from './portfolio.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

import { ContactComponent } from './about/contact/contact.component';
import { HomeComponent } from './about/home/home.component';
import { ReadingListComponent } from './about/reading-list/reading-list.component';
import { ResumeComponent } from './about/resume/resume.component';

import { WorkService } from './work/work.service';
import { WorkComponent } from './work/work.component';

import { PortfolioUIService } from './portfolio-ui.service';

@NgModule({
  declarations: [
    AppMenuComponent,
    ContactComponent,
    HomeComponent,
    ReadingListComponent,
    ResumeComponent,
    WorkComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    HttpModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
    portfolioRoutingProviders,
    WorkService,
    PortfolioUIService
  ],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
