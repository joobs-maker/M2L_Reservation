
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent {
  // Suppression de la déclaration du formGroup
  // reservationForm: FormGroup;

  onSubmit() {
    console.log("Formulaire soumis");
  }
}
