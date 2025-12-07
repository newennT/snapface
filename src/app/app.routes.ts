import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list';
import { LandingPageComponent } from './components/landing-page/landing-page';

export const routes: Routes = [
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent}
    
];
