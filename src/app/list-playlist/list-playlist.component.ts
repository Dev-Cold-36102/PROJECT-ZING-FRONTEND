import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from '../_model/Playlist';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {error} from '@angular/compiler/src/util';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/JWT-ROLE/_services';
import {User} from '@app/JWT-ROLE/_models';
import { PlayList } from '../_model/PlayList';
import { PlaylistService } from '../_service_not_authen/playlist.service';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.less']
})

export class ListPlaylistComponent implements OnInit {
  playLists: Playlist[];
  srcImagePlaylist = 'assets/images/playlist/';
  currentUser: User;

  constructor(private httpClient: HttpClient, private router: Router, private authenticationService: AuthenticationService ,private playlistService: PlaylistService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.getListPlaylist();
  }
  getListPlaylist() {
    this.httpClient.post<Playlist[]>(`${environment.apiUrl}/api/playlist-user`, this.currentUser.id ).subscribe(item => {
      this.playLists = item;
    });
  }

  getPlaylistFrom(playlist: Playlist) {
    this.router.navigate(['addSong-playlist', playlist]);
  }

  deletePlaylist(playlist: Playlist) {
    if (confirm('do you want continue')) {
    }
  }
  name: string;
  playList: PlayList = null;




  edit(item: PlayList) {
    this.playList = item;
  }

  onUpdate() {
    this.playlistService.updatePlaylists(this.playList).subscribe(data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  delete(id: number) {
    this.playlistService.deletePlaylists(id).subscribe(data => {
          let index = this.getIndex(data.id);
          this.playLists.splice(index, 1);
        },
        error => {
          console.log(error);
        });
  }

  getIndex(id: number): number {
    let result = 0;
    this.playLists.forEach((item, index ) => {
      if (item.id == id) {
        result = index;
      }
    });
    return result;
  }
}
