import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private firestore: AngularFirestore) { }

  getPassPerGender(){
    return this.firestore.collection('passengers', ref => ref.where('survived', '==', '1')).valueChanges()
  }

}
