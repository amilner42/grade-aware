import {Pipe} from 'angular2/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe {

  transform(value) {
    return value.slice().reverse();
  }
}
