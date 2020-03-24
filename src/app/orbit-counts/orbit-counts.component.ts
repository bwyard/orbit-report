import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
@Input() satellites: Satellite[];
  satTypesCount = ['Space Debris','Communication','Probe','Positioning','Space Station', 'Telescope']
  constructor() { }

  ngOnInit() {
  }


  countType(arrayList,satType){
    let total = 0
    for (let arrayIndex in arrayList){
      //console.log(arrayList[arrayIndex])
      if (arrayList[arrayIndex].type.toLowerCase() === satType.toLowerCase()){
        total += 1
      }
    }
    return total;

  }

}
