export interface Reservation {
    id?: number;               // ID de la réservation (optionnel si c'est généré côté backend)
    salle: string;             // Nom de la salle
    date: string;              // Date de la réservation
    heureDebut: string;        // Heure de début
    heureFin: string;          // Heure de fin
    utilisateur: string;       // Nom de l'utilisateur qui réserve
  }
  