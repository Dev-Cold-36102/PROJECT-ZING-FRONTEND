 export interface Song {
  id?: number;
  nameSong: string;
  infoSong: string;
  imageSong: string;
   dateSong: Date;
  likeSong: number;
  listenSong: number;
  downloadSong: number;
  commendSong?: string;
   author: string;
   link: string;
   category: string;
   idSinger: number;
   idAlbum: number;
}
