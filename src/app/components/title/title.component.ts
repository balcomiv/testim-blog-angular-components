import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <p>
      {{ message }}
    </p>
    <input #titleField type="text" />
    <button (click)="onButtonClick(titleField.value)">Change Title</button>
  `,
  styles: [],
})
export class TitleComponent {
  @Input() message: string = '';

  @Output() changeTitleEvent = new EventEmitter<string>();

  onButtonClick(newTitle: string): void {
    this.changeTitleEvent.emit(newTitle);
  }
}
