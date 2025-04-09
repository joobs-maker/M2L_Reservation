import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model'; // ← Assure-toi que ce chemin est correct

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) { }

  // Créer une réservation
  reserveSalle(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Obtenir toutes les réservations
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/reservations/${id}`);
  }
  
}



