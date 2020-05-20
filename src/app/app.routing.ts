import {Routes, RouterModule} from '@angular/router';


import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';
import {SigninComponent} from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AuthGuard]

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
