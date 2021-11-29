import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  radioVal = 1;
  constructor() { }

  ngOnInit(): void {
  }
  systemChange(e: any) {
    this.radioVal = e.value;
  }

}
