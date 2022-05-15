import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.css']
})
export class ShowLocationComponent implements OnInit {


  location: Location = new Location();
  marker = new google.maps.Marker();

  mapOptions: google.maps.MapOptions = {
    center: { lat: 47.48133557545227, lng: 19.05561282306601 },
    zoom: 14,
    disableDoubleClickZoom: true
  }

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.location = this.stateService.locationToShow;
    let latLng = new google.maps.LatLng(this.location.lat, this.location.lng)
    this.marker.setPosition(latLng)
    this.mapOptions.center.lat = this.marker.getPosition().lat();
    this.mapOptions.center.lng = this.marker.getPosition().lng();
  }

}
