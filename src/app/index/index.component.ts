import { Component, OnInit } from '@angular/core';
import {SongService} from '../_service_not_authen/song.service';
import {Song} from '../_service_not_authen/song';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  songs: Song[] = [];
  keyword = '';
  hitSongs: Song [] = [];
  daySongs: Song [] = [];


  constructor(private songService: SongService) {
    this.getSongFromApi();
  }

  ngOnInit(): void {
  }
  getSongFromApi() {
    this.songService.fetchListSongApi().subscribe(song => {
      this.songs = song;
      console.log('dang lay du lieu tu api');
      console.log(song);
      this.hitSongs = this.songs.sort((a, b) => {
        console.log('sap xep');
        return b.listenSong - a.listenSong;
      });
      this.daySongs = this.songs.sort((a, b) => {
        console.log('theo ngay');
        // @ts-ignore
        return a.dateSong - b.dateSong;
      });
    });
  }
  searchSongByName() {
    console.log(this.keyword);
    if (this.keyword === '') {
      this.songs = this.songService.getAllSongs();
    } else {
      this.songs = this.songService.searchNewsByTitle(this.keyword);
    }
  }
}
