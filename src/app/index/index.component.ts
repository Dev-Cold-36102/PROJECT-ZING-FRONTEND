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


  constructor(private songService: SongService) {
    this.getSongFromApi();
    this.sortByView();
  }

  ngOnInit(): void {
  }
  getSongFromApi(){
    this.songService.fetchListSongApi().subscribe(song => {
      this.songs = song;
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
  sortByView() {
    // @ts-ignore
    this.hitSongs = this.songs.sort((a: Song['view'], b: Song['view']) =>  b - a);
  }

}
