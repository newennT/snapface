import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatePipe,  NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnap } from '../../models/face-snap';
import { FaceSnapService } from '../../services/face-snap-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [DatePipe, NgStyle, NgClass, TitleCasePipe, RouterLink],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapped!: boolean;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();

    this.snapped = false;
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
  }

  prepareInterface() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);

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
