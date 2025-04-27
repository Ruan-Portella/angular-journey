import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString'
})
export class CustomStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Custom String: ${value}`;
  }

}
