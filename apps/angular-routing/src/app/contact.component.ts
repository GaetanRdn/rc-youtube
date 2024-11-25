import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'rc-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-8 justify-center items-center h-screen',
  },
  template: `<h1 class="text-3xl">N'hésite pas à me contacter</h1>

    <form
      class="flex flex-col gap-4 *:flex *:justify-between *:gap-4"
      (ngSubmit)="sendContact()"
      [formGroup]="contactForm"
    >
      <fieldset>
        <label for="name">Nom*</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          class="border border-black rounded"
          formControlName="lastName"
        />
      </fieldset>
      <fieldset>
        <label for="name">Prénom*</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          class="border border-black rounded"
          formControlName="firstName"
        />
      </fieldset>
      <fieldset>
        <label for="name">Email*</label>
        <input type="email" name="email" id="email" class="border border-black rounded" formControlName="email" />
      </fieldset>
      <fieldset>
        <label for="request">Besoin*</label>
        <textarea name="request" id="request" class="border border-black rounded" formControlName="request"></textarea>
      </fieldset>

      <button
        type="submit"
        class="border border-black rounded-lg w-fit px-4 py-2 enabled:hover:bg-gray-200 disabled:opacity-50"
        [disabled]="contactForm.invalid"
      >
        Je prends contact
      </button>
    </form> `,
  imports: [ReactiveFormsModule],
})
export default class ContactComponent {
  readonly formSent: WritableSignal<boolean> = signal(false);

  readonly contactForm: FormGroup = new FormGroup({
    lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    request: new FormControl('', Validators.required),
  });

  sendContact() {
    console.log('send contact');
    this.formSent.set(true);
  }
}
