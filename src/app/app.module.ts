import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SlideComponent} from './index/slide/slide.component';
import {ShowMusicHotComponent} from './index/show-music-hot/show-music-hot.component';
import {AlbumHotComponent} from './index/album-hot/album-hot.component';
import {MusicNewComponent} from './index/music-new/music-new.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SigninComponent} from './signin/signin.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {appRoutingModule} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


// import {JwPaginationComponent} from 'jw-angular-pagination';
import {JwtInterceptor, ErrorInterceptor} from './JWT-ROLE/_helpers';
import {CreateSongComponent} from './create-song/create-song.component';
import {TestAutocompleteComponent} from './test-autocomplete/test-autocomplete.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ViewDetailSongComponent} from './index/view-detail-song/view-detail-song.component';
import {CreateSongComponent} from './CRUDSong/create-song/create-song.component';
import {CreatePlaylistComponent} from './create-playlist/create-playlist.component';
import { ListPlaylistComponent} from './list-playlist/list-playlist.component';
import { AddSongPlaylistComponent } from './add-song-playlist/add-song-playlist.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        SlideComponent,
        ShowMusicHotComponent,
        AlbumHotComponent,
        MusicNewComponent,
        FooterComponent,
        IndexComponent,
        SigninComponent,
        RegisterComponent,
        // JwPaginationComponent,
        CreateSongComponent,
        CreatePlaylistComponent,
        ListPlaylistComponent,
        AddSongPlaylistComponent,
        TestAutocompleteComponent
    ],

        CreateSongComponent,
        ViewDetailSongComponent,
        TestAutocompleteComponent],

    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        appRoutingModule,
        BrowserAnimationsModule,
        AutocompleteLibModule
        // AutocompleteLibModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass:
            JwtInterceptor, multi: true
        },
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
