import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs: Song [] = [];
  url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
    this.fetchListSongApi().subscribe((newItem) => {
      this.songs = newItem;
    }, error => {
      console.log('SongService.getAllSongsFromAPI() :: Gặp lỗi khi lấy danh sách bài viết từ Back and');
    });
  }

  fetchListSongApi() {
    return this.httpClient.get<Song[]>(this.url + 'api/songs');
  }

  getAllSongs() {
    console.log('b');
    return this.songs;
  }

  searchNewsByTitle(keyword: string): Song[] {
    const foundSongs = this.songs.filter(item => item.nameSong.includes(keyword));
    return foundSongs;
  }

  saveSong(songs: Song) {
    // @ts-ignore
    this.httpClient.post(this.url + 'api/home', songs).subscribe();
  }

  remoreSong(id: number) {
    // @ts-ignore
    this.httpClient.post(this.url + 'api/delete', id).subscribe();
  }
}
