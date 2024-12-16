import { beforeEach, describe } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithNewInputComponent } from './with-new-input.component';

describe(WithNewInputComponent, () => {
  let fixture: ComponentFixture<WithNewInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithNewInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WithNewInputComponent);
  });

  it('should verify title input value', async () => {
    fixture.componentRef.setInput('title', 'Angular with old input');
    fixture.detectChanges();

    expect(fixture).toMatchInlineSnapshot(`
      <rc-with-new-input
        disabled="[object Object]"
        titlewithnewway="[object Object]"
      >
        <p>
          with-input title : Angular with old input
        </p>
        <p>
          with-input disabled : false
        </p>
      </rc-with-new-input>
    `);
  });
});
