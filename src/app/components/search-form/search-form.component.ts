import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApiService } from '../services/api.service';
import { PassengerModel } from '../models/passenger.model';
import {isArray, isNumeric} from 'rxjs/internal-compatibility';
import { Router } from '@angular/router';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
} from 'devextreme-angular';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  passengers: any = [];
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.loard().then(
      (collection: any) => {
        collection.forEach((item: any) => {
          if (Array.isArray(item) && item.length > 0) {
            this.passengers = item;
            }
         });

      },
      (error: any) => {}
    );
  }


alterDataGriOperation(e: any): void {
  e.toolbarOptions.items.push(
  {
  location: 'befor',
  widget: 'dxButton',
  sortIndex: 15,
  options: {
  icon: 'dxButton',
  text: 'statistics',
  onClick: () => {
   //todo
   this.router.navigate(['statistics']);

   }
  }
   });
}


}
