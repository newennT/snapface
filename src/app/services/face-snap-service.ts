import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  private FaceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Mon premier FaceSnap',
      'Mon premier FaceSnap description',
      new Date(),
      0,
      'https://images.unsplash.com/photo-1761133135231-2f2fe70907e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471'
    ),
    new FaceSnap(
      'Mon deuxième FaceSnap',
      'Mon deuxième FaceSnap description',
      new Date(),
      100,
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470'
    ),
    new FaceSnap(
      'Mon troisième FaceSnap',
      'Mon troisième FaceSnap description',
      new Date(),
      250,
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470'
    ).withLocation('Paris'),

  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.FaceSnaps];
  } 

  
}
