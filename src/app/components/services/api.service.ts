import { Injectable } from '@angular/core';
import { AuthService } from '../../login/services/auth-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    constructor(private firebase: AngularFirestore) {}

    loard() {
        return new Promise(
            (resolve, reject) => {
              let collection = this.firebase.collection('passengers').valueChanges();
              resolve(collection);
            }
          );
    }
}


