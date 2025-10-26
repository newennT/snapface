import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaceSnapListComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  
}
