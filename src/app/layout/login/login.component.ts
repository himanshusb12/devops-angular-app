import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  message: string = "";
  returnUrl: string = "/home";
  
  subscription: Subscription = new Subscription();

  constructor(private readonly userService: UserService, private readonly router: Router,
    private readonly route: ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
   }

  ngOnInit(): void {
  }

  authenticate() {
    localStorage.setItem('isLoggedIn', 'false');
    this.subscription = this.userService.getUsers().subscribe(
      data => {
        for (let u of data) {
          if (u.name === this.username && u.password === this.password) {
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigateByUrl(this.returnUrl);
            return;
          }
        }
      }
    );
    this.message = 'Invalid username or password';
  }
}
