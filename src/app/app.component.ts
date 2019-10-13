import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'ZOOLOGICO HAPY LIVE';
  emailContacto: string;

 ngOnInit(): void {
   this.emailContacto = localStorage.getItem('email');
 }

 ngDoCheck(): void {
  this.emailContacto = localStorage.getItem('email');
 }

 borrarEmail() {
  localStorage.removeItem('email');
  localStorage.clear();
  this.emailContacto = null;
 }
}
