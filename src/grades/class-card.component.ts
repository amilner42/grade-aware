import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Class} from 'student';
import {Injectable} from 'angular2/core';
import {ColorService} from '../shared/services/color.service';
import {Inject} from 'angular2/core';
import {StudentService} from '../shared/services/student.service';
import {NgClass} from 'angular2/common';

@Component({
  moduleId: module.id,
  selector: 'class-card',
  templateUrl: './class-card.component.html',
  styleUrls: [
    './class-card.component.css'
  ],
  directives: [
    NgClass
  ]
})

@Injectable()
export class ClassCard {

  private static allClassCards: ClassCard[] = [];
  /* tslint:disable */
  @Input() private classWithGrades: Class;
  /* tslint:enable */
  private borderColor: string;
  private classAverage: number;
  private ColorService;
  private StudentService;
  private isActive: boolean;

  // Add this class card to the static list of class cards, inject services.
  constructor(@Inject(ColorService) ColorService, @Inject(StudentService) StudentService) {
    ClassCard.allClassCards.push(this);
    this.ColorService = ColorService;
    this.StudentService = StudentService;
    this.isActive = false;
  }

  // In ngOnInit you can access inputs to the component, you cannot do this in
  // the constructor.
  ngOnInit() {
    this.classAverage = this.StudentService.averageGradeForClass(this.classWithGrades);
    this.borderColor = this.ColorService.getColorFromScore(this.classAverage);
  }
}
