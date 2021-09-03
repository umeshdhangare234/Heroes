import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  constructor(public authService:AuthService,private router:Router) { 
    this.message = this.getMessage();
  }

  ngOnInit(): void {
  }

  getMessage(){
    return "Logged " + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(){
    this.message = "Trying to login..."

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn){
        const redirectUrl = '/admin';

        this.router.navigate([redirectUrl]);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.message = this.getMessage();
  }
}
