import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '../../model/song.class';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {
  urlAPI = 'http://localhost:8080/api/song';

  constructor(private httpClient: HttpClient) {
  }

  getAllSong(): Observable<Song[]> {
    // @ts-ignore
    return this.httpClient.get(this.urlAPI);
  }

  handleError(err) {
    if (err.error instanceof Error) {
      console.log('loi1');
    } else {
      console.log('loi2');
    }
  }

  addSong(song: Song): Observable<Song> {
    // @ts-ignore
    return this.httpClient.post(this.urlAPI, song);
  }

  updateSong(song: Song): Observable<Song> {
    // @ts-ignore
    return this.httpClient.put(`${this.urlAPI}/${book.idSong}`, song);

  }

  deleteSong(idSong: number): Observable<Song> {
    // @ts-ignore

    return this.httpClient.delete(`${this.urlAPI}/${idSong}`);

  }

}
