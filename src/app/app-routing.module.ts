import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpotifyPlaylistComponent} from "./spotify-playlist/spotify-playlist.component";


const routes: Routes = [
  {
    path: 'spotify',
    component: SpotifyPlaylistComponent,
    children: [{
      path: ':id',
      component: SpotifyPlaylistComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
