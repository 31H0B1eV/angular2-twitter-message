import {Component} from 'angular2/core';
import { TweetComponent} from './tweet/tweet.component';

@Component({
    selector: 'my-app',
    template: `
      <div class="container">
        <tweet></tweet>
      </div>
    `,
    directives: [TweetComponent]
})
export class AppComponent { }
