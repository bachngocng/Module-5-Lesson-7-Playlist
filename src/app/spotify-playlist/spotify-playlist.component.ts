import { Component, OnInit } from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song";

@Component({
  selector: 'app-spotify-playlist',
  templateUrl: './spotify-playlist.component.html',
  styleUrls: ['./spotify-playlist.component.css']
})
export class SpotifyPlaylistComponent implements OnInit {
  playlist: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }
}
