import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB_7JdO5AQ5o86nujSKUaSY-qyjfgxcoEU",
      authDomain: "mis-clientes-9b97e.firebaseapp.com",

    })
  }
  title = 'login';
}
