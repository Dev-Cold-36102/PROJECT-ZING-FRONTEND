import {Users} from '../_service_not_authen/users';

export class PlayList {
    id: number;
    name: string;
    image: string;
    description: string;
    date: string;
    likePlaylist: number;
    listen: number;
    download: number;
    users: Users;
}
