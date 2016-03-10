import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {AttendanceComponent} from '../../attendance/attendance.component';
import {GradesComponent} from '../../grades/grades.component';
import {CommentsComponent} from '../../comments/comments.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Grades',  component: GradesComponent},
  { path: '/attendance', name: 'Attendance', component: AttendanceComponent},
  { path: '/comments' , name: 'Comments', component: CommentsComponent}
])
export class AppComponent {}
