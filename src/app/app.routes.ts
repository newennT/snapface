import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list';
import { LandingPageComponent } from './components/landing-page/landing-page';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap';

export const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent}
    
];
