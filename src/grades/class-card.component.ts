import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Class} from 'student';
import {Injectable} from 'angular2/core';
import {ColorService} from '../shared/services/color.service';
import {Inject} from 'angular2/core';
import {StudentService} from '../shared/services/student.service';

@Component({
  moduleId: module.id,
  selector: 'class-card',
  templateUrl: './class-card.component.html',
  styleUrls: [
    './class-card.component.css'
  ]
})

@Injectable()
export class ClassCard {

  /* tslint:disable */
  @Input() private classWithGrades: Class;
  /* tslint:enable */
  private borderColor: string;
  private classAverage: number;
  private ColorService;
  private StudentService;

  constructor(@Inject(ColorService) ColorService, @Inject(StudentService) StudentService) {
    this.ColorService = ColorService;
    this.StudentService = StudentService;
  }

  ngOnInit() {
    this.classAverage = this.StudentService.averageGradeForClass(this.classWithGrades);
    this.borderColor = this.ColorService.getColorFromScore(this.classAverage);
  }
}
