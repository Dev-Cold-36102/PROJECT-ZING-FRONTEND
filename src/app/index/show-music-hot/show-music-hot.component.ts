import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../_service_not_authen/song';
import {SongViewDetail} from '../../_model/SongViewDetail';

@Component({
    selector: 'app-show-music-hot',
    templateUrl: './show-music-hot.component.html',
    styleUrls: ['./show-music-hot.component.css']
})
export class ShowMusicHotComponent implements OnInit {
    paging = 1;
    songDetail: SongViewDetail = null;


    constructor() {
    }

    @Input() songsHot: Song[];

    srcImageSong = 'assets/images/song/';
    srcAudioSong = 'assets/mp3Link/';

    ngOnInit(): void {
    }

    onViewSong(item: SongViewDetail) {
        this.songDetail = item;
        console.log(item);
        console.log(this.songDetail.singer);
    }
}
