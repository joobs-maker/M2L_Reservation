
import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
//import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { SalleListComponent } from './salle-list/salle-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reservations', pathMatch: 'full' },  // Redirige vers /reservations par défaut
 // { path: 'reservations', component: ReservationListComponent },  // Liste des réservations
  { path: 'reservation/new', component: ReservationComponent },   // Formulaire de nouvelle réservation
  { path: 'salles', component: SalleListComponent },  // Liste des salles
];
