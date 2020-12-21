import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MapsServiceService {

  constructor(public db: AngularFirestore) { }

  getParadas<MapsI>(){
    return this.db.collection<MapsI>('paradas').snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as MapsI;
      const id = a.payload.doc.id;
      return {id, ...data};
    })))
  }

}
