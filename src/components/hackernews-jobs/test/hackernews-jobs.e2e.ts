import { newE2EPage } from '@stencil/core/testing';

describe('hackernews-jobs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hackernews-jobs></hackernews-jobs>');

    const element = await page.find('hackernews-jobs');
    expect(element).toHaveClass('hydrated');
  });
});
