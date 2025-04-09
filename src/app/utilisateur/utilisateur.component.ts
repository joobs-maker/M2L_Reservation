import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  imports: [],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})

export class UtilisateurComponent implements OnInit {
  utilisateur = {
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
