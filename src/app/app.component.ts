import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  bottomTabs: BottomTabsGroup[] = [
    {
      label: 'My Feed',
      url: 'home',
      icon: 'home',
      menuUrl: '',
    },
    {
      label: 'Prizes',
      url: 'prize',
      icon: 'emoji_events',
      menuUrl: '#',
    },
    {
      label: 'Offers',
      url: 'offer',
      icon: 'local_offer',
      menuUrl: '#',
    },
    {
      label: 'Codes',
      url: 'code',
      icon: 'dialpad',
      menuUrl: '#',
    },
  ];

  onClickBottomTab(event: any): void {
    console.log(event);
  }
}
export interface BottomTabsGroup {
  label?: string;
  icon?: string;
  url?: string;
  menuUrl?: string;
}
