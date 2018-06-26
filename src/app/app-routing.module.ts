import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes: Routes = [
  {
    path :'login',
    component:LoginComponent,
    
  },
  {
    path :'forget',
    component:ForgetpasswordComponent,
    
  },
  {
    path :'register',
    component:RegisterComponent,
    
  },
  {
    path:'verify',
    component:VerifyComponent
  },

  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',
  canActivate: [AuthGuard],
  // runGuardsAndResolvers: 'always'

},
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  { path: '', redirectTo: '/pages/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {
}
