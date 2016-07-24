import { Component } from "angular2/core";
import { LikesComponent } from "../likes/likes.component";

@Component({
  selector: 'tweet',
  template: `
    <div class="row" *ngFor="#tweet of tweets">
      <div class="wrapper">
        <div class="col-xs-3 col-md-3">
          <a href="#" class="thumbnail user-image">
            <img src="{{ tweet.img }}">
          </a>
        </div>
        <div class="col-xs-9 col-md-9 item-text">
          <h3>{{ tweet.name }} <small>{{ tweet.hashtag }}</small></h3>
          <p>{{ tweet.text }}</p>
          <likes [like]="tweet.iLike" [totalLikes]="tweet.likes"></likes>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      margin-top: 25px;
    }
    .item-text {
      margin-top: -20px;
    }
    .user-image {
      max-width: 155px;
      max-height: 155px;
      min-width: 85px;
      min-height: 85px;
    }
  `],
  directives: [LikesComponent]
})

export class TweetComponent {
  tweets = [
    {
      name: 'Windward',
      hashtag: '@windwardstudios',
      img: 'http://lorempixel.com/150/150/people/?1',
      text: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt',
      likes: 9,
      iLike: false
    },
    {
      name: 'Angular JS News',
      hashtag: '@angularjs_news',
      img: 'http://lorempixel.com/150/150/people/?2',
      text: 'Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med på et eller annet vis.',
      likes: 11,
      iLike: true
    },
    {
      name: 'UX & Bootstrap',
      hashtag: '@3rdwave',
      img: 'http://lorempixel.com/150/150/people/?3',
      text: 'Standardbiten av Lorem Ipsum brukt siden 1500-tallet er gjengitt nedenfor for spesielt interesserte.',
      likes: 3,
      iLike: false
    }
  ];
}
