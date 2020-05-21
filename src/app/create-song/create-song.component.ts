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

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.songForm = new FormGroup({
            nameSong: new FormControl(),
            infoSong: new FormControl(),
            imageSong: FormControl.value,
            dateSong: new FormControl(new Date()),
            likeSong: new FormControl(0),
            listenSong: new FormControl(0),
            downloadSong: new FormControl(0),
            commendSong: new FormControl(0),
            category: new FormControl(),
            author: new FormControl(),
            linkSong: new FormControl()
        });
    }

    submit() {
        const song: Song = this.songForm.value;
        console.log(song.imageSong);
        // console.log(document.getElementById('imageSong').value);

        this.creatSong(this.songForm.value);
    }

    creatSong(song: Song) {
        this.httpClient.post(`${environment.apiUrl}/create-song`, song).subscribe((result) => {
            console.log('Thêm bai hat thành công');
            alert('ADD SUCCESS!');
        }, (error) => {
            console.log('Gặp lỗi khi thêm song');
            console.error(error);
        });
    }

}
