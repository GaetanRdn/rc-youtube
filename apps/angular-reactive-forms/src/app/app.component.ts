import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface SuscriptionForm {
  nom: FormControl<string>;
  prenom: FormControl<string>;
  email: FormControl<string>;
}

@Component({
    imports: [ReactiveFormsModule],
    selector: 'rc-root',
    styles: `
      :host {
          display: block;
          width: 500px;

          .ng-invalid.ng-touched:not(form) {
              border: 1px solid red;
          }

          form {
              display: block;
              width: fit-content;
              text-align: center;

              > *:not(:last-child) {
                  margin-bottom: 1rem;
              }

              > div {
                  display: flex;
                  justify-content: flex-end;
                  gap: 1rem;
              }
          }
      }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<h1>Welcome angular-reactive-forms</h1>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div>
        <label>Nom</label>
        <input type="text" formControlName="nom" />
        @if (form.controls.nom.hasError('forbidenValue')) {
        <span>Valeur invalid</span>
        } @else if (!form.controls.nom.untouched &&
        form.controls.nom.hasError('required')) {
        <span>Champ obligatoire</span>
        }
      </div>

      <div>
        <label>Prénom</label>
        <input type="text" formControlName="prenom" />
      </div>

      <div>
        <label>Email</label>
        <input type="email" formControlName="email" />
      </div>

      <button type="submit" [disabled]="form.invalid">Je m'inscris</button>
    </form>`
})
export class AppComponent implements OnInit {
  protected readonly form: FormGroup<SuscriptionForm> =
    new FormGroup<SuscriptionForm>(
      {
        nom: new FormControl<string>('', {
          nonNullable: true,
          validators: Validators.required,
        }),
        prenom: new FormControl<string>('', {
          nonNullable: true,
          validators: Validators.required,
        }),
        email: new FormControl<string>(
          { value: '', disabled: true },
          {
            nonNullable: true,
            validators: [Validators.required, Validators.email],
          }
        ),
      },
      {
        updateOn: 'blur',
      }
    );

  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
      .subscribe(console.log);

    this.form.statusChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(console.log);
  }

  submit(): void {
    console.log('submit');
    console.log(this.form.getRawValue().nom);
    console.log(this.form.value);
  }
}

export function customValidator(): ValidatorFn {
  return (control: AbstractControl): any => {
    const forbidenValue = 'Redin';

    if (control.value !== forbidenValue) {
      return null;
    }

    return { forbidenValue: true };
  };
}
