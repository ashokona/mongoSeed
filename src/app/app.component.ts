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

  constructor(
    private navService: NavService
  ) { }
  onToogleSideNav(v) {
    this.isExpanded = v;
  }

  onItemClicked(route) {
    console.log(route);
  }
  navItems: any[] = [
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
