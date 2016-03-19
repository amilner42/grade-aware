import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Class} from 'student';

@Component({
  moduleId: module.id,
  selector: 'class-card',
  templateUrl: './class-card.component.html',
  styleUrls: [
    './class-card.component.css'
  ]
})

export class ClassCard {

  /* tslint:disable */
  @Input() private classWithGrades: Class;
  /* tslint:enable */
}
