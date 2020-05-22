import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Song} from '../../../model/song.class';
import {SongServiceService} from '../../../service/SongService/song-service.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit, OnDestroy {

  song: Song = null;
  songs: Song[] = [];
  songDetail: Song = null;

  subscription: Subscription;

  constructor(public songServiceService: SongServiceService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

   loadData() {
    this.subscription = this.songServiceService.getAllSong()
      .subscribe(
        (data) => {
          this.songs = data;

        }, error => {
          this.songServiceService.handleError(error);
        }
      );
  }

  onDeleteSong(idSong: number) {
    this.subscription = this.songServiceService.deleteSong(idSong).subscribe(
      deleteData => {
        const index = this.getIndex(deleteData.idSong);
        this.songs.splice(index, 1);
        this.loadData();
      }, error => {
        this.songServiceService.handleError(error);
      }
    );
  }

  getIndex(id: number): number {
    let result = 0;
    this.songs.forEach((item, index) => {
      if (item.idSong === id) {
        result = index;

      }
    });
    return result;

  }

  onEditSong(item: Song) {
    this.song = item;

  }

  onUpdateSong() {
    this.subscription = this.songServiceService.updateSong(this.song).subscribe(
      (updateData) => {
        const index = this.getIndex(updateData.idSong);
        this.songs[index] = updateData;
        this.loadData();
      }, error => {
        this.songServiceService.handleError(error);
      }
    );
  }

  onViewSong(item: Song) {
    this.songDetail = item;

  }
}
