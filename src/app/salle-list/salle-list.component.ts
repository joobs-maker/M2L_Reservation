import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-salle-list',
  imports: [],
  templateUrl: './salle-list.component.html',
  styleUrl: './salle-list.component.css'
})

export class SalleListComponent implements OnInit {
  salles = [
    { name: 'Salle A', description: 'Salle pour réunions de 10 personnes' },
    { name: 'Salle B', description: 'Salle pour réunions de 20 personnes' },
    { name: 'Salle C', description: 'Salle pour conférences' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/salles').subscribe((data: any) => {
      this.salles = data;
    });

   
  }
  reserverSalle(salle: any) {
    console.log(`Réservation de ${salle.name}`);
    // Ici, tu peux naviguer vers un autre composant ou appeler une API pour réserver
  }
}

 

