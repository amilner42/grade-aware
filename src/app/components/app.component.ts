import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {NameListService} from '../../shared/services/name-list.service';
import {AttendanceComponent} from '../../attendance/attendance.component';
import {GradesComponent} from '../../grades/grades.component';

@Component({
  selector: 'app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Grades',  component: GradesComponent},
  { path: '/attendance', name: 'Attendance', component: AttendanceComponent}
])
export class AppComponent {}
