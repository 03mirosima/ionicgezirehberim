import { Component, OnInit,ViewChild,AfterContentInit} from '@angular/core';
import {Router} from '@angular/router';
declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit,AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;

  constructor(private router:Router) { }
  goBack()
  {
this.router.navigate(['home']);            }

  ngOnInit():void {
  }

  ngAfterContentInit(){
    console.log("afterinit");
    setTimeout(() =>{
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
});
    },1000 );
       } 

}  

