import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Singer} from '../_model/Singer';
import {Album} from '../_model/Album';
import {HttpClient} from '@angular/common/http';
import {SongService} from '../_service_not_authen/song.service';
import {Song} from '../_service_not_authen/song';
import {environment} from '@environments/environment';
import {User} from '@app/JWT-ROLE/_models';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/JWT-ROLE/_services';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.less']
})
export class CreatePlaylistComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private songService: SongService,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  currentUser: User;
  playListForm: FormGroup;
  nameSong: string;
  formPlaylistData: FormData;
  listSongs: Song[] = [];


  ngOnInit(): void {
    this.getAllSong();
    this.playListForm = new FormGroup({
      name: new FormControl('name'),
      description: new FormControl('description'),
      date: new FormControl(new Date()),
      image: new FormControl(),
      likePlaylist: new FormControl('0'),
      listen: new FormControl('0'),
      download: new FormControl('0'),
      users: new FormControl(this.currentUser.username)
    });
    this.formPlaylistData = new FormData();
  }

  submit() {
    const playlist: any = this.playListForm.value;
    this.formPlaylistData.append('name', playlist.name);
    this.formPlaylistData.append('description', playlist.description);
    this.formPlaylistData.append('date', playlist.date);
    this.formPlaylistData.append('likePlaylist', playlist.likePlaylist);
    this.formPlaylistData.append('listen', playlist.listen);
    this.formPlaylistData.append('download', playlist.download);
    this.formPlaylistData.append('users', playlist.users);
    console.log(this.currentUser.username);
    this.creatPlaylist(this.formPlaylistData);
  }

  creatPlaylist(playlist: any) {
    console.log(`${environment.apiUrl}/create-playlist`);
    console.log(playlist.toString());
    this.httpClient.post(`${environment.apiUrl}/create-playlist`, playlist).subscribe((result) => {
      console.log('Thêm playlist thành công');
      alert('Thêm playlist thành công');
    }, (error) => {
      console.log('Gặp lỗi khi thêm playlist');
      console.error(error.toString());
      alert('Gặp lỗi khi thêm playlist');
    });
  }


  getAllSong() {
    this.songService.fetchListSongApi().subscribe((newItem) => {
      this.listSongs = newItem;
      console.log(this.listSongs.length);
    }, error => {
      console.log('SongService.getAllSongFromAPI() :: Gặp lỗi khi lấy danh sách ca si từ Back and');
    });
  }

  onChangeImage(event) {
    this.formPlaylistData.append('image', event.target.files[0]);
  }



}
