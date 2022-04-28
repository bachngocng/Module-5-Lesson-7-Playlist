import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyPlaylistComponent } from './spotify-playlist/spotify-playlist.component';
import { SpotifyPlayerComponent } from './spotify-player/spotify-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyPlaylistComponent,
    SpotifyPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
