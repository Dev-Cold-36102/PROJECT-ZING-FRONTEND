import {Component, OnInit} from '@angular/core';
import {Song} from '../../_service_not_authen/song';
import {HttpClient} from '@angular/common/http';
import {SongService} from '../../_service_not_authen/song.service';
import {User} from '@app/JWT-ROLE/_models';
import {AuthenticationService} from '@app/JWT-ROLE/_services';
import {UpdateSongService} from '../../_service_not_authen/update-song.service';
import {Router} from '@angular/router';
import {SongViewDetail} from '../../_model/SongViewDetail';
import {ViewDetailSongService} from '../../_service_not_authen/view-detail-song.service';

@Component({
    selector: 'app-list-song-owner',
    templateUrl: './list-song-owner.component.html',
    styleUrls: ['./list-song-owner.component.less']
})
export class ListSongOwnerComponent implements OnInit {

    listSong: Song[] = [];
    srcImageSong = 'assets/images/song/';
    srcAudioSong = 'assets/mp3Link/';
    currentUser: User;
    paging = 1;

    constructor(private route: Router, private httpClient: HttpClient, private updateSong: UpdateSongService, private songService: SongService
        , private authenticationService: AuthenticationService
        , private viewDetailSongService: ViewDetailSongService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.getAllSongOwner();
    }

    ngOnInit() {
        this.getAllSongOwner();
    }

    getAllSongOwner() {
        this.songService.fetchListSongUsersApi(this.currentUser.id).subscribe((data) => {
            this.listSong = data;
        }, error => {
            console.log('error when get song owner!');
        });
    }

    viewSong(song: SongViewDetail) {
        this.updateSong.setSong(song);
        this.route.navigate(['/edit-song']);
    }

    onviewSongDetail(song: SongViewDetail) {
        this.viewDetailSongService.setSong(song);
        this.route.navigate(['/view-song']);
    }

}
