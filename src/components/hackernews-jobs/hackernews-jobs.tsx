import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hackernews-jobs',
  styleUrl: 'hackernews-jobs.scss',
  shadow: true,
})
export class HackernewsJobs {

  render() {
    return (
      <Host>
        <slot>hackernews </slot>
      </Host>
    );
  }

}
