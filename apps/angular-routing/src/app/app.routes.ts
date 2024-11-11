import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoachingOneHourComponent } from './coaching-one-hour.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CoachingOneMonthComponent } from './coaching-one-month.component';
import { CoachingComponent } from './coaching.component';
import { CoachingDetailComponent } from './coaching-detail.component';
import { CoachingInMemoryService } from './infra/coaching-in-memory.service';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'coaching',
    component: CoachingComponent,
    children: [
      {
        path: 'one-hour',
        component: CoachingOneHourComponent,
        children: [
          {
            path: ':id',
            component: CoachingDetailComponent,
            resolve: {
              coaching: coachingResolverFn(),
            },
          },
        ],
      },
      { path: 'one-month', component: CoachingOneMonthComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

function coachingResolverFn() {
  return (route: ActivatedRouteSnapshot) => {
    if ('id' in route.params && route.params['id'] != null) {
      return toSignal(inject(CoachingInMemoryService).get(Number(route.params['id'])))();
    }
    throw new Error('id is not defined');
  };
}
