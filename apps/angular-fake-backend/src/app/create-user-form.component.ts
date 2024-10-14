import { ChangeDetectionStrategy, Component, output, OutputEmitterRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCreationForm, UserCreationPayload } from './user';

@Component({
  selector: 'rc-create-user-form',
  standalone: true,
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div>
        <label>Nom</label>
        <input type="text" formControlName="lastName" />
      </div>

      <div>
        <label>Prénom</label>
        <input type="text" formControlName="firstName" />
      </div>

      <div>
        <label>Email</label>
        <input type="email" formControlName="email" />
      </div>

      <button type="submit" [disabled]="form.invalid">Je m'inscris</button>
    </form>
  `,
  styles: `:host {
      width: 100%;

      form {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          div {
              display: flex;
              gap: 1rem;
              justify-content: space-between;

              label {
                  flex: 1 0 15%;
              }

              input {
                  flex: 1 1 100%;
              }
          }
      }
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class CreateUserFormComponent {
  readonly userCreated: OutputEmitterRef<UserCreationPayload> = output<UserCreationPayload>();

  protected readonly form: FormGroup<UserCreationForm> = new FormGroup<UserCreationForm>({
    lastName: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    firstName: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  submit(): void {
    this.userCreated.emit(this.form.getRawValue());
  }
}
