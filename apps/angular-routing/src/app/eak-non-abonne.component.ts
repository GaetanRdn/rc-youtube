import { Component, input, InputSignalWithTransform } from '@angular/core';

@Component({
  selector: 'rc-eak-non-abonne',
  standalone: true,
  host: { class: 'flex flex-col gap-8 justify-center items-center h-screen' },
  template: ` <h1 class="text-3xl" [class.animate-bounce]="withAnimation()">EAK futur abonné</h1> `,
})
export default class EakAbonneComponent {
  withAnimation: InputSignalWithTransform<boolean, unknown> = input(true, {
    transform: (value: unknown) => value !== 'false',
  });
}
