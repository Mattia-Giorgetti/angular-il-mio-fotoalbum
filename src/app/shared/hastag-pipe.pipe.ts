import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hastagPipe'
})
export class HastagPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return '#' + value;
  }

}
