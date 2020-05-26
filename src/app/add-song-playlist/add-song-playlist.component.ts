import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Playlist} from '../_model/Playlist';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {SongService} from '../_service_not_authen/song.service';
import {Song} from '../_service_not_authen/song';

@Component({
    selector: 'app-add-song-playlist',
    templateUrl: './add-song-playlist.component.html',
    styleUrls: ['./add-song-playlist.component.less']
})
export class AddSongPlaylistComponent implements OnInit {
    id: number;
    playlist: Playlist;
    srcImagePlaylist = 'assets/images/playlist/';
    songs: Song[] = [];
    listSongInPlaylist: Song[] = [];

    constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private songService: SongService) {
    }

    ngOnInit(): void {
        this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getPlaylist();
        this.getSongHot();
        this.getSongInPlaylist();
    }

    getPlaylist() {
        this.httpClient
            .get<Playlist>(`${environment.apiUrl}/api/playlist/${this.id}`)
            .subscribe(item => {
                this.playlist = item;
                console.log('lay thanh cong');
                console.log(this.playlist.name);
            }, error => {
                console.log('co loi ko tim dc voi id nay');
            });
    }

    getSongHot() {
        this.songService.fetchListSongApi().subscribe(item => {
            this.songs = item;
            this.songs.sort((a, b) => {
                console.log('sap xep');
                return b.listenSong - a.listenSong;
            });
        });
    }

    getSongInPlaylist() {
        this.httpClient
            .post<Song[]>(`${environment.apiUrl}/api/listSongPlaylist`, this.id)
            .subscribe(item => {
                console.log('lay bai hat trong playlist thanh cong');
                this.listSongInPlaylist = item;
                console.log(this.listSongInPlaylist.length);
            }, error => {
                console.log('coloi khi lay bai hat trong playlist');
            });
    }

    addSongInPlaylist(song: Song) {
        this.httpClient
            .post(`${environment.apiUrl}/api/addsongin-playlist`, song)
            .subscribe(item => {
                console.log('thanh cong');
            }, error => {
                console.log('co loi');
            });
        this.httpClient
            .post<Song[]>(`${environment.apiUrl}/api/sendplaylist`, this.playlist)
            .subscribe(item => {
                console.log('ok');
                this.listSongInPlaylist = item;
                this.getSongInPlaylist();
                alert('them thanh cong');
            }, error => {
                alert('co loi khi them bai hat');
                console.log('co loi tai ham them bai hat vao playlist');
            });
    }

    removeSongInPlaylist(song: Song) {
        alert(' tinh nag chua cap nhat');
    }

}
