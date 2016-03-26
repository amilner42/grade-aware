import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
  moduleId: module.id,
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: [
    './comment.component.css'
  ]
})
export class CommentComponent {

  /* tslint:disable */
  @Input() private comment: Comment;
  /* tslint:enable */
}
