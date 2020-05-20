import {Component, Input, OnInit} from '@angular/core';
import {Role, User} from '@app/JWT-ROLE/_models';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/JWT-ROLE/_services';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/signin']);
    }

    ngOnInit(): void {
    }

}
