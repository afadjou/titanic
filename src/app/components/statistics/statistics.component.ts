import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPieChartModule } from 'devextreme-angular';
import { PassengersData, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [Service],
})
export class StatisticsComponent {
  passengers!: PassengersData [];


  constructor(service: Service, private router: Router, ) {
    this.passengers = service.getPassengersData();
    console.log("passengers" , this.passengers)
  }


  customizeLabel(point: { argumentText: any; valueText: any; }) {
    return `${point.argumentText}: ${point.valueText}%`;
  }
  onBack() {
    this.router.navigate(['dashboard']);
  }


}

