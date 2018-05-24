import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  
} from "angular5-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("795078814293-5as1o5njshd73arl72pqkvgktv878g27.apps.googleusercontent.com")
        },
      ]
  )
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
  
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }