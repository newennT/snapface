import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap';
import { FaceSnapService } from '../../services/face-snap-service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

/*************  ✨ Windsurf Command ⭐  *************/
/*******  700d218a-2d6e-439c-950c-059c57cbf7bb  *******/
  constructor(private FaceSnapService: FaceSnapService) {
    
  }

  ngOnInit(): void {
    this.faceSnaps = this.FaceSnapService.getFaceSnaps();
  }

}
