import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { inject } from '@angular/core';
import { UserRepository } from './infra/user.repository';
import ContactComponent from './contact.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Accueil' },
  {
    path: 'coaching',
    title: 'Coaching 1:1',
    loadComponent: () => import('./coaching.component'),
    loadChildren: () => import('./coaching.routes'),
  },
  {
    path: 'eak',
    title: 'abonné eak',
    canMatch: [() => inject(UserRepository).isAbonne()],
    loadComponent: () => import('./eak-abonne.component'),
  },
  { path: 'eak', title: 'souscription eak', loadComponent: () => import('./eak-non-abonne.component') },
  {
    path: 'contact',
    loadComponent: () => import('./contact.component'),
    canDeactivate: [
      (contactComponent: ContactComponent) => {
        return contactComponent.contactForm.untouched || contactComponent.formSent();
      },
    ],
  },
  { path: '**', loadComponent: () => import('./page-not-found.component') },
];
