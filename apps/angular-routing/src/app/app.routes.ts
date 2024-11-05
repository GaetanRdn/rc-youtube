import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoachingOneHourComponent } from './coaching-one-hour.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CoachingOneMonthComponent } from './coaching-one-month.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'one-hour',
    component: CoachingOneHourComponent,
  },
  { path: 'one-month', component: CoachingOneMonthComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];
