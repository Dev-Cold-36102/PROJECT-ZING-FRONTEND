﻿import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './JWT-ROLE/_helpers';
import {Role} from './JWT-ROLE/_models';
import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';
import {SigninComponent} from './signin/signin.component';
import {CreateSongComponent} from './create-song/create-song.component';
import {TestAutocompleteComponent} from './test-autocomplete/test-autocomplete.component';
import {CreatePlaylistComponent} from './create-playlist/create-playlist.component';
import {ListPlaylistComponent} from './list-playlist/list-playlist.component';
import {AddSongPlaylistComponent} from './add-song-playlist/add-song-playlist.component';
import {Playlist} from './_model/Playlist';
import {ListSongOwnerComponent} from './CRUDSong/list-song-owner/list-song-owner.component';
import {EditSongComponent} from './CRUDSong/edit-song/edit-song.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
        // canActivate: [AuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'create-song',
        component: CreateSongComponent
    },
    {
        path: 'listsong-owner',
        component: ListSongOwnerComponent
    },
    {
        path: 'test-autocpmlete',
        component: TestAutocompleteComponent
    },
    {
        path: 'edit-song',
        component: EditSongComponent
    },
    {
        path: 'list-playlist',
        component: ListPlaylistComponent
    },
    {
        path: 'addSong-playlist',
        component: AddSongPlaylistComponent
    },
    {
        path: 'create-playlist',
        component: CreatePlaylistComponent
    },
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
