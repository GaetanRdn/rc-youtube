import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoachingOneHourComponent } from './coaching-one-hour.component';
import { ContactComponent } from './contact.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'one-hour',
    component: CoachingOneHourComponent,
  },
  { path: 'one-month', component: CoachingOneHourComponent },
  { path: 'contact', component: ContactComponent },
];
