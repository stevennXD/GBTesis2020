import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Linea } from '../interfaces/lines.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinesServiceService {

  constructor(private firestore: AngularFirestore) { }

  getLineasListQuitumbe(): Observable<Linea[]> {
    return this.firestore.collection<Linea>('lineasQuitumbe').valueChanges();
  }

  getLineasDetailQuitumbe(lineaId: string): Observable<Linea> {
    return this.firestore.collection('lineasQuitumbe').doc<Linea>(lineaId).valueChanges();
    
  }

  getLineasListMagdalena(): Observable<Linea[]> {
    return this.firestore.collection<Linea>('lineasMagdalena').valueChanges();
  }
  getLineasDetailMagdalena(lineaId: string): Observable<Linea> {
    return this.firestore.collection('lineasMagdalena').doc<Linea>(lineaId).valueChanges();
  }

  getLineasListRecreo(): Observable<Linea[]> {
    return this.firestore.collection<Linea>('lineasRecreo').valueChanges();
  }
  getLineasDetailRecreo(lineaId: string): Observable<Linea> {
    return this.firestore.collection('lineasRecreo').doc<Linea>(lineaId).valueChanges();
  }

  getLineasListLabrador(): Observable<Linea[]> {
    return this.firestore.collection<Linea>('lineasLabrador').valueChanges();
  }
  getLineasDetailLabrador(lineaId: string): Observable<Linea> {
    return this.firestore.collection('lineasLabrador').doc<Linea>(lineaId).valueChanges();
  }
}
