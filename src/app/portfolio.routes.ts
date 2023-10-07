import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { HomeComponent } from './about/home/home.component';
import { ReadingListComponent } from './about/reading-list/reading-list.component';
import { ResumeComponent } from './about/resume/resume.component';

import { WorkComponent } from './work/work.component';

const portfolioRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'reading-list', component: ReadingListComponent },
    { path: 'resume', component: ResumeComponent },
    { path: ':url', component: WorkComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];

export const portfolioRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<AppSharedModule> = RouterModule.forRoot(portfolioRoutes, {});

export class AppSharedModule {
    static forRoot(): ModuleWithProviders<AppSharedModule> {
      return {
        ngModule: AppSharedModule
      };
    }
  }