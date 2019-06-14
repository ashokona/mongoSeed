import { Component } from '@angular/core';
import { NavService } from './shared/services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angualrSeed';
  isExpanded: Boolean = true;
  sideNavWidth = '100px';
  constructor(
    private navService: NavService
  ) { }
  onToogleSideNav(value) {
    this.isExpanded = value;
  }

  onItemClicked(route) {
    console.log(route);
  }

  onToggleSideNav(value) {
    this.isExpanded = value;
  }

  onWidthChange(width) {
    console.log(width);
    // this.sideNavWidth = width;
    this.sideNavWidth = `${width}px`;
  }
  navItems: any[] = [
    {
      displayName: 'Nav Item 1',
      iconName: 'fa-camera',
      route: '1',
      children: [
        {
          displayName: 'Nav Item 1 L1',
          iconName: 'fa-camera',
          route: 'l1',
          children: [
            {
              displayName: 'Nav Item 1 L2',
              iconName: 'fa-camera',
              route: '1/l1/test'
            }
          ]
        }
      ]
    },
    {
      displayName: 'Nav Item 2',
      iconName: 'fa-camera',
      children: [
        {
          displayName: 'Nav Item 2 L1',
          iconName: 'fa-camera',
          children: [
            {
              displayName: 'Nav Item 2 L2',
              iconName: 'fa-camera',
              route: '2/l2/test'
            }
          ]
        }
      ]
    },
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
