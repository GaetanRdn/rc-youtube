import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'rc-page-not-found',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<h1 class="text-3xl">404 Not Found</h1>
    <a class="inline-flex" routerLink="/home">Retour Accueil</a> `,
    imports: [RouterLink]
})
export class PageNotFoundComponent {}
