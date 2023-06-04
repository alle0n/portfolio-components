import { Component, Host, h } from '@stencil/core';
import { Location, Search } from '../../globals/icons';

@Component({
  tag: 'hackernews-jobs',
  styleUrl: 'hackernews-jobs.scss',
  shadow: true,
})
export class HackernewsJobs {
  render() {
    return (
      <Host>
        <div class="cxt-hackernews">
          <div class="cxt-hackernews__container">
            <div class="cxt-hackernews__filter">
              <form action="">
                <div class="cxt-hackernews__filter-control">
                  <Search />
                  <input type="text" placeholder='Search job title or keyword' name="title" id="title" />
                </div>
                <div class="cxt-hackernews__filter-control">
                  <Location />
                  <input type="text" placeholder='Country or timezone' name="timezone" id="timezone" />
                </div>
                <button type="submit">
                  Find jobs
                </button>
              </form>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
