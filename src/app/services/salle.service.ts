import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private apiUrl = 'http://localhost:8080/api/salles'; // à adapter selon ton backend

  constructor(private http: HttpClient) {}

  getAllSalles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
