import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Accueil' },
  {
    path: 'coaching',
    title: 'Coaching 1:1',
    loadComponent: () => import('./coaching.component'),
    loadChildren: () => import('./coaching.routes'),
  },
  { path: 'eak', loadComponent: () => import('./eak.component') },
  { path: 'contact', loadComponent: () => import('./contact.component') },
  { path: '**', loadComponent: () => import('./page-not-found.component') },
];
