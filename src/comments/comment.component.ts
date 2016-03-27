import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {DateService} from '../shared/services/date.service';
import {Inject} from 'angular2/core';
import {ColorService} from '../shared/services/color.service';
import {NgStyle} from 'angular2/common';

@Component({
  moduleId: module.id,
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: [
    './comment.component.css'
  ],
  directives: [
    NgStyle
  ]
})
export class CommentComponent {

  /* tslint:disable */
  @Input() private comment: Comment;
  @Input() private year: number;
  /* tslint:enable */
  private dateService;
  private colorService;

  constructor(@Inject(DateService) DateService, @Inject(ColorService) ColorService) {
    this.dateService = DateService;
    this.colorService = ColorService;
  }
}
