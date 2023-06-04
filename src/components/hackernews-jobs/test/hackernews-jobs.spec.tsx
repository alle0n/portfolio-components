import { newSpecPage } from '@stencil/core/testing';
import { HackernewsJobs } from '../hackernews-jobs';

describe('hackernews-jobs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HackernewsJobs],
      html: `<hackernews-jobs></hackernews-jobs>`,
    });
    expect(page.root).toEqualHtml(`
      <hackernews-jobs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hackernews-jobs>
    `);
  });
});
