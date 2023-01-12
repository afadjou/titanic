import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  passengers!: Observable<any[]>;

  constructor(private searchService: SearchService) { }


  getPerGender(){
  this.passengers = this.searchService.getPassPerGender()
  this.passengers.forEach((res) => {
    console.log("taille array", res.length)
  })
  }

}
