import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatePipe,  NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnap } from '../../models/face-snap';
import { FaceSnapService } from '../../services/face-snap-service';

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

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.snapped = false;
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
  }

  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
    this.snapped = false;
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
  }
  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapped = true;
    this.snapButtonText = 'UnSnap !';
    this.userHasSnapped = true;
  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }



}
