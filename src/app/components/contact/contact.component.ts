import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  emailContacto: string;

  constructor() { }

  ngOnInit() {
  }
  saveEmail() {
    console.log(this.emailContacto);
    localStorage.setItem('email', this.emailContacto);

  }

}
