import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(data: number, ...args: unknown[]): unknown {

    return moment(data).format('MMMM Do YYYY, h:mm:ss a');
  }

}
