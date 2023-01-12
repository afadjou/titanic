import { Component } from '@angular/core';
import { AuthService } from '../../login/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isConnected: boolean = false;
  constructor(private authService: AuthService){}
  ngOnInit(){
    this.isConnected = this.authService.isLoggedIn;
  }
}
