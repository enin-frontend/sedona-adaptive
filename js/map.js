ymaps.ready(init);
 
function init(){ 
    if (document.body.offsetWidth > 1226){
        myMap = new ymaps.Map("map", {

            center: [34.869497, -111.760186],
    
            zoom: 8,
            controls: []
        });
    }
         

    if (document.body.offsetWidth <= 1226){
        myMap = new ymaps.Map("map", {

            center: [34.869497, -111.760186],
    
            zoom: 8 ,
            controls: []
           
        });
    }
var myGeoObject = new ymaps.GeoObject({
geometry: {
    type: "Point", // тип геометрии - точка
    coordinates: [34.869497, -111.760186] // координаты точки
}
});

// Размещение геообъекта на карте.
var  myPlacemark = new ymaps.Placemark([34.869497, -111.760186], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIw%0D%0AcHgiIHk9IjBweCIgd2lkdGg9IjI3cHgiIGhlaWdodD0iMjdweCIgdmlld0JveD0iMCAwIDI3IDI3%0D%0AIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNyAyNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+%0D%0ACiAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTMuNSIgY3k9IjEzLjUiIHI9IjEzLjUiLz4K%0D%0AICA8Y2lyY2xlIGZpbGw9IiM4MUIzRDMiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iOC4zNjEiLz4K%0D%0APC9zdmc+Cg==',
    iconImageSize: [27, 27],
    iconImageOffset: [-14, -24]
});
myMap.geoObjects.add(myPlacemark);

}