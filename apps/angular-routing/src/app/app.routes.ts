import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'coaching',
    loadComponent: () => import('./coaching.component'),
    loadChildren: () => import('./coaching.routes'),
  },
  { path: 'contact', loadComponent: () => import('./contact.component') },
  { path: '**', loadComponent: () => import('./page-not-found.component') },
];
