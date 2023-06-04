import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'currency-report',
  styleUrl: 'currency-report.css',
  shadow: true,
})
export class CurrencyReport {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
