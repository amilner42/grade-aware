import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {AppComponent} from './app/app.component';
import {StudentService} from './shared/services/student.service';
import {ColorService} from './shared/services/color.service';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  StudentService,
  ColorService,
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' }),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
