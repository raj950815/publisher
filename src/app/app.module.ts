import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth-interceptor';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { MailVerifyComponent } from './mail-verify/mail-verify.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    PasswordResetComponent,
    MailVerifyComponent,
  ],
  bootstrap: [AppComponent],
    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    SnotifyModule,
    MyDateRangePickerModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {
}
