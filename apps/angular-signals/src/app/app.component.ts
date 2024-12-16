import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'rc-root',
  template: `<h1>Welcome angular-signals</h1>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {}
