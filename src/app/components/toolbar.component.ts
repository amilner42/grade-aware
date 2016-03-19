import {Component} from 'angular2/core';
import {Injectable, Inject} from 'angular2/core';
import {StudentService} from '../../shared/services/student.service';

@Component({
  moduleId: module.id,
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

@Injectable()
export class ToolbarComponent {

  public firstName: string;
  public lastName: string;

  constructor(@Inject(StudentService) StudentService) {
    this.firstName = StudentService.get().firstName;
    this.lastName = StudentService.get().lastName;
  }

}
