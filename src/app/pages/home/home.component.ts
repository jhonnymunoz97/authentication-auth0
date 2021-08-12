import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public auth: AuthService, 
    @Inject(DOCUMENT) public document: Document
  ) { }

  ngOnInit(): void {
   this.auth.user$.subscribe(resp=>{
     console.log(resp);
   })
  }

}
