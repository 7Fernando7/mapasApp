import { Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';
@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-3.701271142882092, 40.41087509497689);

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 13,
    });

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML ='Fernando Paiva'

    // const marker = new Marker({
    //   element: markerHtml,
    //   // color: 'red',
    // })
    // .setLngLat( this.currentLngLat )
    // .addTo( this.map )

  }


}
