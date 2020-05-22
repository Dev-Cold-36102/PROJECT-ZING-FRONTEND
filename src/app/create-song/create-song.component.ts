import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Song} from '../_model/Song';
import {environment} from '@environments/environment';


@Component({
    selector: 'app-create-song',
    templateUrl: './create-song.component.html',
    styleUrls: ['./create-song.component.less']
})
export class CreateSongComponent implements OnInit {

    songForm: FormGroup;
    // imageSong: any = File;
    formSongData: FormData;


    constructor(private httpClient: HttpClient) {

    }

    ngOnInit() {
        this.songForm = new FormGroup({
            nameSong: new FormControl('name'),
            infoSong: new FormControl('name'),
            dateSong: new FormControl(new Date()),
            likeSong: new FormControl(0),
            listenSong: new FormControl(0),
            downloadSong: new FormControl(0),
            commendSong: new FormControl(0),
            category: new FormControl('name'),
            author: new FormControl('name'),
            singer: new FormControl('name'),
            album: new FormControl('name'),
        });
        this.formSongData = new FormData();
    }

    submit() {
        const song: any = this.songForm.value;
        // console.log(song.nameSong);
        this.formSongData.append('nameSong', song.nameSong);
        this.formSongData.append('infoSong', song.infoSong);
        this.formSongData.append('dateSong', song.dateSong);
        this.formSongData.append('likeSong', song.likeSong);
        this.formSongData.append('listenSong', song.listenSong);
        this.formSongData.append('downloadSong', song.downloadSong);
        this.formSongData.append('commendSong', song.commendSong);
        this.formSongData.append('category', song.category);
        this.formSongData.append('author', song.author);
        this.formSongData.append('singer', song.singer);
        this.formSongData.append('album', song.album);
        // console.log(song.imageSong.value);

        this.creatSong(this.formSongData);
    }

    onChangeImage(event) {
        this.formSongData.append('imageSong', event.target.files[0]);
    }

    onChangeAudio(event) {
        // this.imageSong = event.target.files[0];
        // console.log('dsfds');
        this.formSongData.append('linkSong', event.target.files[0]);
    }

    creatSong(song: any) {
        // console.log(song.get('linkSong'));
        this.httpClient.post(`${environment.apiUrl}/create-song`, song).subscribe((result) => {
            console.log('Thêm bai hat thành công');
            // alert('ADD SUCCESS!');
        }, (error) => {
            console.log('Gặp lỗi khi thêm song');
            console.error(error);
        });
    }

}
