import { Component, input } from '@angular/core';

@Component({
  selector: 'rc-eak',
  standalone: true,
  host: { class: 'flex flex-col gap-8 justify-center items-center h-screen' },
  template: ` <h1 class="text-3xl" [class.animate-bounce]="withAnimation()">EAK</h1> `,
})
export default class EakComponent {
  withAnimation = input(true);
}
