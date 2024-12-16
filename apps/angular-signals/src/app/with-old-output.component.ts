import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rc-with-old-output',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      (click)="actionChanged.emit()"
      class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300"
    >
      Click me!
    </button>
  `,
})
export class WithOldOutputComponent {
  @Output() readonly actionChanged: EventEmitter<void> = new EventEmitter<void>();
}
