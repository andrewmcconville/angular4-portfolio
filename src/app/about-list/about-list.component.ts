import { Component, Input } from "@angular/core";

@Component({
    selector: 'portfolio-about-list',
    templateUrl: './about-list.component.html',
    //styleUrls: ['./about-list.component.scss']
})
export class AboutListComponent {
    @Input() menuStateOverride: string;
}
