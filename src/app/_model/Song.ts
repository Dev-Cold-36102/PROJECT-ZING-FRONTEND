import {FormControl} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';

export class Song {
    nameSong: string;

    infoSong: string;

    imageSong: File;

    dateSong: Date;

    likeSong: number;

    listenSong: number;

    downloadSong: number;

    commendSong: string;

    category: string;

    author: string;

    linkSong: File;
}
