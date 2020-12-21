import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsServiceService } from "../../services/maps-service.service";
import { MapsI } from "../../interfaces/maps.interface";
import { IonSlides, LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map = null;
  infoWindow = null;
  markers: MapsI[] = [];

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(public mapsService: MapsServiceService, private loadingControl: LoadingController) {
    this.infoWindow = new google.maps.InfoWindow();
  }

  ngOnInit() {
    this.mapsService.getParadas<MapsI>().subscribe(res => {
      for(let marker of res){
        let newMarker = {
          image: marker.image,
          markerIndex: marker.markerIndex,
          position: {
            lat: marker.position[0],
            lng: marker.position[1],
          },
          text: marker.text,
          title: marker.title,
        }
        this.markers.push(newMarker);
      }
      this.loadMap();
    })
  }

  async loadMap() {
    const loading = await this.loadingControl.create();
    await loading.present();
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = { lat: -0.2952866980783122, lng: -78.55429975778908 };

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13,
      zoomControl: false,
      streetViewControl: false
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
      loading.dismiss();
    });
  }

  private renderMarkers() {
    this.markers.forEach(marker => {
      const markerObj = this.addMarker(marker);
      marker.markerObj = markerObj;

      google.maps.event.addListener(markerObj, 'click', async () =>{
        this.slides.slideTo(marker.markerIndex);
      });
    });
  }

  private addMarker(marker: MapsI) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  async onSlideDidChange(){
    const slideActual = await this.slides.getActiveIndex();
    const paradaActual = this.markers[slideActual];
    this.map.panTo({lat: paradaActual.position.lat, lng: paradaActual.position.lng})  
    
    const markerObj = paradaActual.markerObj;
    this.infoWindow.setContent('<div style="color: black;">'+markerObj.title+'</div>');
    this.infoWindow.open(this.map, markerObj);
  }
}
