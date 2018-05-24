import { Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of'; 
import {
    AuthService,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
    constructor( private socialAuthService: AuthService ) {}
    
    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
     
       if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          // Now sign-in with userData
          
              
        }
      );
    }
    
  title = 'app';
}