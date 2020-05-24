﻿import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './JWT-ROLE/_helpers';
import {Role} from './JWT-ROLE/_models';
import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';
import {SigninComponent} from './signin/signin.component';
import { CreateSongComponent } from './create-song/create-song.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

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
        path: 'create-playlist',
        component: CreatePlaylistComponent
    },
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
