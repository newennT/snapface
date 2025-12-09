import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FaceSnap } from '../../models/face-snap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [TitleCasePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private router: Router) {}




  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }



}
