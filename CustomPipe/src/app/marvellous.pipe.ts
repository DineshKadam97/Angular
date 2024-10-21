import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous',
  standalone: true
})

export class MarvellousPipe implements PipeTransform 
{

  transform(value: unknown, ...args : unknown[]): unknown //call back method
  {
    if(args[0] == "PPA")
    {
      return "Pre-Placement Activity";
    }

    if(args[0] == "Angular")
    {
      return "Angular with MEAN stack";
    }

    return null;
  }

}


//{{ 'Demo' | marvellous : "Hello" : "World" : "Angular"}}