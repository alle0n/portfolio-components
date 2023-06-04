import { newSpecPage } from '@stencil/core/testing';
import { CurrencyReport } from '../currency-report';

describe('currency-report', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CurrencyReport],
      html: `<currency-report></currency-report>`,
    });
    expect(page.root).toEqualHtml(`
      <currency-report>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </currency-report>
    `);
  });
});
