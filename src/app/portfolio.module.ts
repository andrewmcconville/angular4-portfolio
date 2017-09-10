import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routing, portfolioRoutingProviders } from './portfolio.routes';

import { PortfolioComponent } from './portfolio.component';

import { AboutListComponent } from './about-list/about-list.component';
import { ContactComponent } from './about/contact/contact.component';
import { HomeComponent } from './about/home/home.component';
import { ReadingListComponent } from './about/reading-list/reading-list.component';
import { ResumeComponent } from './about/resume/resume.component';

import { WorkListComponent } from './work-list/work-list.component';
import { WorkService } from './work/work.service';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AboutListComponent,
    ContactComponent,
    HomeComponent,
    ReadingListComponent,
    ResumeComponent,
    WorkListComponent,
    WorkComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    HttpModule
  ],
  providers: [
    portfolioRoutingProviders,
    WorkService
  ],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
