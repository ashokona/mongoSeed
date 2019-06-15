import { Component, ViewChild, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { NavService } from './shared/services/nav.service';

const sideNavMinWidth = 50;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angualrSeed';
  isExpanded: Boolean = true;
  sideNavWidth = 50;
  prvSideNavWidth;
  @ViewChild('sideNavContainer') sideNavContainerRef: any;

  constructor(
    private navService: NavService,
    private cdr: ChangeDetectorRef,
    private _ngZone: NgZone
  ) { }

  onToggleSideNav(value) {
    this.isExpanded = value;
    // this.prvSideNavWidth = null;
    // console.log(this.sideNavContainerRef.sideNavContainerRef.nativeElement.offsetWidth);
  }
  onItemClicked(route) {
    const currentSideNavWidth = this.sideNavContainerRef.sideNavContainerRef.nativeElement.offsetWidth
    console.log(currentSideNavWidth);
    console.log(this.prvSideNavWidth);
    if(this.prvSideNavWidth && this.prvSideNavWidth !== currentSideNavWidth) {
      // this.sideNavWidth = this.prvSideNavWidth;
      this.prvSideNavWidth = this.prvSideNavWidth
    }
    else {
      this.prvSideNavWidth = currentSideNavWidth;
    // this.sideNavWidth = currentSideNavWidth;
    }
    // this.prvSideNavWidth = currentSideNavWidth;
    // this.sideNavWidth = `${this.sideNavContainerRef.sideNavContainerRef.nativeElement.offsetWidth}px`; 
    console.log('onItemclick called');
  }
  ngAfterViewInit() {
    // console.log(this.sideNavContainerRef.sideNavContainerRef.nativeElement.offsetWidth);
  }
  ngAfterViewChecked() {
    // console.log(currentSideNavWidth);
    console.log(this.prvSideNavWidth);
    // console.log(this.sideNavContainerRef.sideNavContainerRef.nativeElement.offsetWidth);
    const currentSideNavWidth = this.sideNavContainerRef.sideNavContainerRef.nativeElement.offsetWidth
    if(!this.isExpanded){
      this.sideNavWidth = sideNavMinWidth
    } else if(this.prvSideNavWidth && this.prvSideNavWidth !==  currentSideNavWidth) {
      this.sideNavWidth = this.prvSideNavWidth; 
    }else {
      this.sideNavWidth = currentSideNavWidth;
    }
    this.cdr.detectChanges();
    console.log('view ch  ');
  }

  navItems: any[] = [
    {
      displayName: 'Home',
      iconName: 'fa-home',
      route: 'home'
    },
    {
      displayName: 'Security',
      iconName: 'fa-shield-alt',
      route: 'security',
      children: [
        {
          displayName: 'passwords',
          iconName: 'fa-lock',
          route: 'security/test',
        }
      ]
    },
    {
      displayName: 'Cost',
      iconName: 'fa-dollar-sign',
      route: 'cost',
      children: [
        {
          displayName: 'spends',
          iconName: 'fa-money-check-alt',
          route: 'spends',
          children: [
            {
              displayName: 'savings',
              iconName: 'fa-wallet',
              route: 'cost/spends/test'
            }
          ]
        }
      ]
    }
  ]
  navItems1: any[] = [
    {
      displayName: 'DevFestFL',
      iconName: 'fa-camera',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'fa-camera',
              route: 'test',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'fa-camera',
                  route: 'test'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'fa-camera',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'fa-camera',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'fa-camera',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'fa-camera',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'fa-camera',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'fa-camera',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'fa-camera',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'fa-camera',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'fa-camera',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'fa-camera',
          route: 'material-design'
        }
      ]
    },
    {
      displayName: 'Disney',
      iconName: 'fa-camera',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'fa-camera',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'fa-camera',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'fa-camera',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'fa-camera',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'fa-camera',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'fa-camera',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'fa-camera',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'fa-camera',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'fa-camera',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'fa-camera',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'fa-camera',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'fa-camera',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Orlando',
      iconName: 'fa-camera',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'fa-camera',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'fa-camera',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'fa-camera',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'fa-camera',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'fa-camera',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'fa-camera',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'fa-camera',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'fa-camera',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'fa-camera',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'fa-camera',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'fa-camera',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'fa-camera',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Maleficent',
      disabled: true,
      iconName: 'fa-camera',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'fa-camera',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'fa-camera',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'fa-camera',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'fa-camera',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'fa-camera',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'fa-camera',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'fa-camera',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'fa-camera',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'fa-camera',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'fa-camera',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'fa-camera',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'fa-camera',
          route: 'feedback'
        }
      ]
    }
  ];

}
