import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Ajout de RouterModule
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';

import { SalleListComponent} from './salle-list/salle-list.component';
import { routes } from './app.routes';  // Import des routes
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,             // Le composant principal de l'application
    ReservationComponent,     // Composant de la réservation
    SalleListComponent,           // Composant des salles
  ],
  imports: [
    BrowserModule, 
    CommonModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),  // Routes définies dans app.routes.ts
  ],
  providers: [],
  bootstrap: [AppComponent]    // Démarrage de l'application avec AppComponent
})
export class AppModule { }



