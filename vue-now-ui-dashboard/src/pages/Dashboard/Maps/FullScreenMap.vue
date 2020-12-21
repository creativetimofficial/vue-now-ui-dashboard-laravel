<template>
    <div id="map" class="full-screen-map"></div>
</template>
<script>
import GoogleMapsLoader from 'google-maps';
import { API_KEY } from './API_KEY';
GoogleMapsLoader.KEY = API_KEY;

export default {
  data() {
    return {
      nav: null
    };
  },
  methods: {
    initMap() {
      // Regular Map
      var myLatlng = new window.google.maps.LatLng(40.748817, -73.985428);
      var mapOptions = {
        zoom: 11,
        center: myLatlng,
        disableDefaultUI: true,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dadada'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c9c9c9'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          }
        ]
      };

      var map = new window.google.maps.Map(
        document.getElementById('map'),
        mapOptions
      );

      var marker = new window.google.maps.Marker({
        position: myLatlng,
        title: 'Regular Map!'
      });

      marker.setMap(map);
    }
  },
  mounted() {
    let nav = document.getElementsByTagName('nav');
    if (nav.length > 0) {
      this.nav = nav[0];
    }
    this.nav.classList.add('bg-white');
    this.nav.classList.add('fixed-top');
    this.nav.classList.remove('navbar-transparent');

    GoogleMapsLoader.load(google => {
      this.initMap(google);
    });
  },
  beforeDestroy() {
    this.nav.classList.add('navbar-transparent');
    this.nav.classList.remove('bg-white');
    this.nav.classList.remove('fixed-top');
  }
};
</script>
<style>
#map {
  height: 100vh;
}
</style>
