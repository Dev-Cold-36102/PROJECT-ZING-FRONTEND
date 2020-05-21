import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Song} from '../../../model/song.class';
import {SongServiceService} from '../../../service/SongService/song-service.service';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit, OnDestroy {
  song: Song = null;
  songs: Song[] = [];

  nameSong: string;
  infoSong: string;
  imageSong: string;
  downloadSong: string;
  dateSong: string;
  likeSong: number;
  listenSong: string;
  commendSong: string;
  linkSong: string;
  category: string;
  author: string;

  subscription: Subscription;

  constructor(public songServiceService: SongServiceService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddSong() {
    // @ts-ignore
    const newSong = new Song(this.nameSong, this.infoSong
        , this.imageSong, this.downloadSong, this.author
        , this.dateSong, this.likeSong, this.listenSong
        , this.commendSong, this.linkSong, this.category);
    this.subscription = this.songServiceService.addSong(newSong)
        .subscribe(
            (newData) => {
              this.songs.push(newData);

            }, error => {
              this.songServiceService.handleError(error);
            }
        );


  }

}
