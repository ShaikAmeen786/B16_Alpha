import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //  title="'angular-material-theming-demo";
  //  theme ='DeepPurple-light-theme';
  // isTrue:boolean=false;
  radioVal = 1;
  constructor( 
    ) { }
  
    ngOnInit() { }
    systemChange(e: any) {
      this.radioVal = e.value;
    }
    
  }
