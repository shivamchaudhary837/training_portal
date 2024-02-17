import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  userData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve user data from route parameters
    this.route.paramMap.subscribe(params => {
      this.userData = JSON.parse(params.get('userData') || '{}');
      console.log(this.userData);
    });
  }
}
