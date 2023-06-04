import { newE2EPage } from '@stencil/core/testing';

describe('currency-report', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<currency-report></currency-report>');

    const element = await page.find('currency-report');
    expect(element).toHaveClass('hydrated');
  });
});
