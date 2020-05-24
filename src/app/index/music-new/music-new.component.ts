import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../_service_not_authen/song';

@Component({
  selector: 'app-music-new',
  templateUrl: './music-new.component.html',
  styleUrls: ['./music-new.component.css']
})
export class MusicNewComponent implements OnInit {

  constructor() { }
  @Input() songNew: Song [];

  srcImageSong = 'assets/images/song/';
  srcAudioSong = 'assets/mp3Link/';

  ngOnInit(): void {
  }

}
