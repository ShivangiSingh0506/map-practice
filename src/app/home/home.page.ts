import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
declare let google;
@Component({
  selector: 'app-home',
  // templateUrl: 'home.html'
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
    this.loadMap();
  }
  loadMap(){
    const latLng = new google.maps.LatLng(-34.9290, 138.6010);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  // addMarker(){
  //   const marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: this.map.getCenter()
  //   });
  //   const content = `<h4>Information!</h4>`;
  //   this.addInfoWindow(marker, content);
  // }
  // addInfoWindow(marker, content){
  //   const infoWindow = new google.maps.InfoWindow({
  //     content
  //   });
  //   google.maps.event.addListener(marker, 'click', () => {
  //     infoWindow.open(this.map, marker);
  //   });
  // }
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
