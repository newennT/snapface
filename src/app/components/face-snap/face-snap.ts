import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FaceSnap } from '../../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [DatePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.snapped = false;
    this.snapButtonText = 'Oh Snap !';
  }

  onAddSnap() {
    if (this.snapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText = 'Oh Snap !';
      this.snapped = false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, un Snap de trop !';
      this.snapped = true;
    }
  }



}
