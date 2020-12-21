import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(public db: AngularFirestore) { }

  getNoticias<NewsI>(){
    return this.db.collection<NewsI>('noticias').snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as NewsI;
      const id = a.payload.doc.id;
      return {id, ...data};
    })))
  }
}
