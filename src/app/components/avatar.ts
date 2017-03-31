import { Component } from '@angular/core';

@Component({
  selector: 'avatar',
  template: `
  <div class="avatarded" [style.background-image]="'url(' + src + ')'">
  </div>
  `
})

export class AvatarComponent {
  private src:string = "/images/LegoBruceWayneAvatar.png";
}
