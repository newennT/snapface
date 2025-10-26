import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatePipe,  NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnap } from '../../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [DatePipe, NgStyle, NgClass, TitleCasePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  snapButtonText!: string;
  userHasSnapped!: boolean;
  myLargeNumber = 1234567.89;
  myPercentage = 0.259;
  myCurrency = 49.99;

  ngOnInit(): void {
    this.snapped = false;
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
  }

  onAddSnap() {
    if (this.snapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText = 'Oh Snap !';
      this.snapped = false;
      this.userHasSnapped = false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, un Snap de trop !';
      this.snapped = true;
      this.userHasSnapped = true;
    }
  }



}
