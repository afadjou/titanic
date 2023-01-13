import {
    Injectable,
  } from '@angular/core';

  export class PassengersData {
    passengers!: string;
    percent!: number;
  }

  const passengers: PassengersData[] = [{
    passengers: 'Age',
    percent: 35.5,
  }, {
    passengers: 'Classe',
    percent: 15.0,
  }, {
    passengers: 'Sex',
    percent: 17.3,
  }, {
    passengers: 'Survivant',
    percent: 32.7,
  }];

  @Injectable()
  export class Service {
    static getPassengersData(): PassengersData[] {
      throw new Error('Method not implemented.');
    }
    getPassengersData(): PassengersData[] {
     return passengers
    }
    getLanguagesData(): PassengersData[] {
      return passengers;
    }
  }
