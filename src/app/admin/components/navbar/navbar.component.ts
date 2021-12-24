import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  navItems = [
    { 
      path: '/home', 
      name: '' 
    },
    { 
      path: '/buy', 
      name: 'Buy' 
    },
    { 
      path: '/rent', 
      name: 'Rent' 
    },
    { 
      path: '/sell', 
      name: 'Sell' 
    },
    { 
      path: '/signin', 
      name: 'Sign In' 
    },
    {
       path: '/register', 
       name: 'Register' 
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }
}
