import {Users} from '../_service_not_authen/users';

export  class Playlist {
    id?: number;
    name: string;
    description: string;
    image: string;
    date: Date;
    likePlaylist?: number;
    listen?: number;
    download?: number;
    users: Users;
}
