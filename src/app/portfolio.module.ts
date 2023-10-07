import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { routing, portfolioRoutingProviders } from './portfolio.routes';

import { PortfolioComponent } from './portfolio.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { HomeComponent } from './about/home/home.component';
import { ReadingListComponent } from './about/reading-list/reading-list.component';
import { ResumeComponent } from './about/resume/resume.component';

import { WorkService } from './work/work.service';
import { WorkComponent } from './work/work.component';

import { StackOverflowUserResearchComponent } from './work/stack-overflow-user-research/stack-overflow-user-research.component';
import { UniversalDesignQTipGripComponent } from './work/universal-design-q-tip-grip/universal-design-q-tip-grip.component';
import { UXEngineeringComponent } from './work/ux-engineering/ux-engineering.component';
import { LidarMilwaukeeComponent } from './work/lidar-milwaukee/lidar-milwaukee.component';
import { MilwaukeeParcelValueComponent } from './work/milwaukee-parcel-value/milwaukee-parcel-value.component';
import { OvenInterfaceComponent } from './work/oven-interface/oven-interface.component';

import { PortfolioUIService } from './portfolio-ui.service';

@NgModule({
  declarations: [
    AppMenuComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ReadingListComponent,
    ResumeComponent,
    WorkComponent,
    PortfolioComponent,
    StackOverflowUserResearchComponent,
    UniversalDesignQTipGripComponent,
    UXEngineeringComponent,
    LidarMilwaukeeComponent,
    MilwaukeeParcelValueComponent,
    OvenInterfaceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    RouterModule.forRoot(portfolioRoutingProviders, {
    scrollPositionRestoration: 'enabled'
}),
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  providers: [
    portfolioRoutingProviders,
    WorkService,
    PortfolioUIService
  ],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
