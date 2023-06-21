import { Component, Input } from '@angular/core';
import { Picture } from 'src/app/shared/Picture.model';

@Component({
  selector: 'app-pic-card',
  templateUrl: './pic-card.component.html',
  styleUrls: ['./pic-card.component.scss']
})
export class PicCardComponent {
 @Input()
  pic!: Picture;
// @Input() id!: number

}
