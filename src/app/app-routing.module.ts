import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegisterComponent } from './register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { MailVerifyComponent } from './mail-verify/mail-verify.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'forgot',
    component: ForgetpasswordComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,

  },
  {
    path: 'forgotReset',
    component: PasswordResetComponent,
  },
  {
    path: 'verify',
    component: MailVerifyComponent,
  },
  {
    path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: '', loadChildren: 'app/secure/pages.module#PagesModule',
    canActivate: [AuthGuard],
    // runGuardsAndResolvers: 'always'

  },

  // { path: '', redirectTo: '/pages/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard],
})
export class AppRoutingModule {
}
