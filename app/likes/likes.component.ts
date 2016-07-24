import { Component, Input } from "angular2/core";

@Component({
  selector: 'likes',
  template: `
    <i
      (click)="onClick()"
      class="fa fa-heart"
      [class.active]="!iLike"
      [class.active]="iLike">
    </i>
    <span class="likes-counter">{{ likes }}</span>
  `,
  styles: [`
    .fa-heart {
      color: #ccc;
    }
    .active {
      color: tomato;
    }
  `]
})

export class LikesComponent {
  @Input('totalLikes') likes = 0;
  @Input('like') iLike = false;

  onClick() {
    this.iLike = !this.iLike;

    if(this.iLike == true) {
      this.likes+=1;
    } else {
      this.likes-=1;
    }
  }
}
