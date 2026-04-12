import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-list',
  standalone: false,
  templateUrl: './trip-list.html',
  styleUrls: ['./trip-list.css']
})
export class TripList implements OnInit {
  trips: any = [];

  newTrip = {
    name: '',
    description: '',
    length: 0,
    start: '',
    resort: '',
    perPerson: 0,
    image: ''
  };

  editingTripId: string | null = null;
  isEditing: boolean = false;

  constructor(private tripService: TripData,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {

    if (localStorage.getItem('loggedIn') !== 'true') {
      this.router.navigate(['/login']);
      return;
    }

    this.loadTrips();
  }

  loadTrips(): void {
    console.log('loadTrips ran');

    this.tripService.getTrips().subscribe({
      next: (data: any) => {
        console.log('API data:', data);
        this.trips = Array.isArray(data) ? data : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }


  editTrip(trip: any): void {
    this.isEditing = true;
    this.editingTripId = trip._id;

    this.newTrip = {
      name: trip.name,
      description: trip.description,
      length: trip.length,
      start: trip.start ? trip.start.substring(0, 10) : '',
      resort: trip.resort,
      perPerson: trip.perPerson,
      image: trip.image
    };
    console.log('Edit mode ON');
    console.log('editingTripId:', this.editingTripId);
  }

  onSubmit(): void {
    console.log('isEditing:', this.isEditing);
    console.log('editingTripId:', this.editingTripId);

    if (this.isEditing && this.editingTripId) {
      this.tripService.updateTrip(this.editingTripId, this.newTrip).subscribe({
        next: () => {
          console.log('Trip updated!');
          this.loadTrips();

          this.newTrip = {
            name: '',
            description: '',
            length: 0,
            start: '',
            resort: '',
            perPerson: 0,
            image: ''
          };

          this.isEditing = false;
          this.editingTripId = null;
        },
        error: (err) => {
          console.error('Error updating trip:', err);
        }
      });
    } else {
      this.tripService.addTrip(this.newTrip).subscribe({
        next: () => {
          console.log('Trip added!');
          this.loadTrips();

          this.newTrip = {
            name: '',
            description: '',
            length: 0,
            start: '',
            resort: '',
            perPerson: 0,
            image: ''
          };
        },
        error: (err) => {
          console.error('Error adding trip:', err);
        }
      });
    }
  }
  deleteTrip(tripId: string): void {
    console.log('Deleting trip id:', tripId);

    this.tripService.deleteTrip(tripId).subscribe({
      next: () => {
        console.log('Trip deleted');
        this.loadTrips();
      },
      error: (err) => {
        console.error('Error deleting trip:', err);
      }
    });
  }
}