import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { TabsComponent } from './tabs.component';
import { RegisterComponent } from './register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },  // Default route is login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home.component').then(m => m.HomeComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile.component').then(m => m.ProfileComponent),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '/login' },
];
