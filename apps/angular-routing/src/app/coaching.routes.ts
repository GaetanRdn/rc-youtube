import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';
import { CoachingInMemoryService } from './infra/coaching-in-memory.service';
import { CoachingOneMonthComponent } from './coaching-one-month.component';
import { CoachingDetailComponent } from './coaching-detail.component';
import { CoachingOneHourComponent } from './coaching-one-hour.component';

export default [
  {
    path: 'one-hour',
    component: CoachingOneHourComponent,
    title: 'Coaching 1:1 1h',
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
  {
    path: 'one-month',
    component: CoachingOneMonthComponent,
  },
] satisfies Routes;

function coachingResolverFn() {
  return (route: ActivatedRouteSnapshot) => {
    if ('id' in route.params && route.params['id'] != null) {
      return toSignal(inject(CoachingInMemoryService).get(Number(route.params['id'])))();
    }
    throw new Error('id is not defined');
  };
}
