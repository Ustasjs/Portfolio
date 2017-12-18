class Map {
  makeMap() {
    let mapContainer = document.getElementById('map');

    new Promise(resolve => {
      window.addEventListener('load', () => {
        this.map = new google.maps.Map(mapContainer, {
          center: {
            lat: 55.754336,
            lng: 37.62064
          },
          zoom: 14,
          styles: [
            {
              featureType: 'landscape.natural',
              elementType: 'geometry.fill',
              stylers: [
                {
                  visibility: 'on'
                },
                {
                  color: '#e0efef'
                }
              ]
            },
            {
              featureType: 'poi',
              elementType: 'geometry.fill',
              stylers: [
                {
                  visibility: 'on'
                },
                {
                  hue: '#1900ff'
                },
                {
                  color: '#c0e8e8'
                }
              ]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                {
                  lightness: 100
                },
                {
                  visibility: 'simplified'
                }
              ]
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off'
                }
              ]
            },
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [
                {
                  visibility: 'on'
                },
                {
                  lightness: 700
                }
              ]
            },
            {
              featureType: 'water',
              elementType: 'all',
              stylers: [
                {
                  color: '#7dcdcd'
                }
              ]
            }
          ]
        });
      });
      resolve();
    });
  }
}

export default new Map();
