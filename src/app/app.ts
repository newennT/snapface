import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./components/face-snap/face-snap";
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  anotherSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Mon premier FaceSnap',
      'Mon premier FaceSnap description',
      new Date(),
      0,
      'https://images.unsplash.com/photo-1761133135231-2f2fe70907e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471'
    );

    this.myOtherSnap = new FaceSnap(
      'Mon deuxième FaceSnap',
      'Mon deuxième FaceSnap description',
      new Date(),
      0,
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470'
    );

    this.anotherSnap = new FaceSnap(
      'Mon troisième FaceSnap',
      'Mon troisième FaceSnap description',
      new Date(),
      0,
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470'
    );
  }
}
