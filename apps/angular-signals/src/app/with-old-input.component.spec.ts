import { beforeEach, describe } from 'vitest';
import { WithOldInputComponent } from './with-old-input.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe(WithOldInputComponent, () => {
  let fixture: ComponentFixture<WithOldInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithOldInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WithOldInputComponent);
  });

  it('should verify title input value', async () => {
    fixture.componentRef.setInput('title', 'Angular with old input');
    fixture.detectChanges();

    expect(fixture).toMatchInlineSnapshot(`
      <rc-with-old-input
        disabled="[object Object]"
        titlewitholdway="[object Object]"
      >
        <p>
          with-input title : Angular with old input
        </p>
        <p>
          with-input disabled : false
        </p>
      </rc-with-old-input>
    `);
  });
});
