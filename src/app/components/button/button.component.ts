import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   *
   * @type {boolean}
   *
   * @default false
   */
  @Input()
  primary: boolean = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button label';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
