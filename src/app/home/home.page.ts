import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare let google: any;
@Component({
  selector: 'app-home',
  // templateUrl: 'home.html'
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
  }
  ionViewDidEnter(){
    this.loadMap();
  }
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }
  // loadMap(){
  //   const latLng = new google.maps.LatLng(-34.9290, 138.6010);
  //   const mapOptions = {
  //     center: latLng,
  //     zoom: 15,
  //     disableDefaultUI: true,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
  // }
  addMarker(){
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    const content = `<h4>Information!</h4>`;
    this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content){
    const infoWindow = new google.maps.InfoWindow({
      content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

// }
