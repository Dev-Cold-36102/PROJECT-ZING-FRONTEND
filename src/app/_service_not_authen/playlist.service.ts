import { Injectable } from '@angular/core';
import {PlayList} from '../_model/PlayList';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  updateURL = 'http://localhost:8080/update-playlist';
  deleteURL = 'http://localhost:8080/delete';
  private playLists: PlayList[] = [];

  constructor(private http: HttpClient) {
  }

  // getMovies() {
  //   return this.http.get<Movie[]>(this.movieURL);
  // }
  //
  // addMovies(movie :Movie) :Observable<Movie>{
  //   return this.http.post<Movie>(this.movieURL,movie);
  // }

  updatePlaylists(playList: PlayList): Observable<PlayList> {
    return this.http.put<PlayList>(`${this.updateURL}/${playList.id}`, playList);
  }

  deletePlaylists(id: number): Observable<PlayList> {
    return this.http.delete<PlayList>(`${this.deleteURL}/${id}`);
  }
}
