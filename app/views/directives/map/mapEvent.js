var mapEvent = function() {
    return {
        templateUrl: 'views/directives/map/template.html',
        link: link
    };

    function link(scope, element, attrs) {

        function drawMap() {
            var options = {
                elt: document.getElementById('map'),             // ID of map element on page
                zoom: 7,                                     // initial zoom level of the map
                latLng: { lat: 48.6667, lng: 19.5 }     // center of map in latitude/longitude
            };

            // construct an instance of MQA.TileMap with the options object
            window.map = new MQA.TileMap(options);

            // Download the modules.
            // The MQA.KMLDeserializer can also create InfoWindows if the data is supplied.
            MQA.withModule('dotcomwindowmanager', 'remotecollection', 'kmldeserializer', 'smallzoom', 'mousewheel', function() {
                map.addControl(new MQA.SmallZoom());
                map.enableMouseWheelZoom();

                // create a remote collection
                var metro = new MQA.RemoteCollection('views/vector-map/map.kml', new MQA.KMLDeserializer());
                metro.collectionName = 'metro lines';

                // automatically zoom and center the map using the bestFit method after the collection has loaded
                MQA.EventManager.addListener(metro, 'loaded', function() {
                    map.bestFit();
                });

                // add the shape collection to the map
                map.addShapeCollection(metro);
            });
        }
    drawMap(); 
    }		
};



