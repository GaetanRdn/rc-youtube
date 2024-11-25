import { Component, input, InputSignalWithTransform } from '@angular/core';

@Component({
  selector: 'rc-eak',
  standalone: true,
  host: { class: 'flex flex-col gap-8 justify-center items-center h-screen' },
  template: ` <h1 class="text-3xl" [class.animate-bounce]="withAnimation()">EAK {{ withAnimation() + '' }}</h1> `,
})
export default class EakComponent {
  withAnimation: InputSignalWithTransform<boolean, unknown> = input(true, {
    transform: (value: unknown) => value !== 'false',
  });
}
