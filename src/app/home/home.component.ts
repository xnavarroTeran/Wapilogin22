import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
  
  constructor(private HomeService: HomeService,private router: ActivatedRoute) {

    console.log(" in constructor...");
    this.initialization();
  }
  apptitle = 'Team Audit';
  landingbg = 'darkseagreen';
  applogo = '';
  themebg = '';
  
  initialization() {
    
  }

  ngOnInit(): void {
    
    this.applogo = this.HomeService.lpLogo;  
    
  };

}
