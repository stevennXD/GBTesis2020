import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsServiceService } from "../../services/maps-service.service";
import { MapsI } from "../../interfaces/maps.interface";
import { IonSlides, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from "@angular/router";

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
  markerActual = {};
  lineaID;

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(public mapsService: MapsServiceService, private loadingControl: LoadingController, private router: Router, private route: ActivatedRoute) {
    this.infoWindow = new google.maps.InfoWindow();
  }

  ngOnInit() {
    const lineaId: string = this.route.snapshot.paramMap.get('id');
    this.lineaID = lineaId

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
      zoom: 13.2,
      zoomControl: false,
      streetViewControl: false
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
      loading.dismiss();
    });

    this.imprimirMarker();
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

  async imprimirMarker() {
    for(let marker of this.markers){
      if(marker.title == this.lineaID){
        this.slides.slideTo(marker.markerIndex);
        const slideActual = await this.slides.getActiveIndex();
        const paradaActual = this.markers[slideActual];
        this.map.panTo({lat: paradaActual.position.lat, lng: paradaActual.position.lng})
      }
    }
  }

  //metodo para navegar a una pagina
  navigateToLineasQuitumbe(){
    this.router.navigate(['/lines-quitumbe']);
  }

  navigateToLineasRecreo(){
    this.router.navigate(['/lines-recreo']);
  }

  navigateToLineasMagdalena(){
    this.router.navigate(['/lines-magdalena']);
  }

  navigateToLineasLabrador(){
    this.router.navigate(['/lines-labrador']);
  }
}
