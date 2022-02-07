
      require(["esri/Map", "esri/layers/CSVLayer", "esri/views/MapView", "esri/widgets/Legend"], (
        Map,
        CSVLayer,
        MapView,
        Legend
      ) => {
        const url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";

        // Paste the url into a browser's address bar to download and view the attributes
        // in the CSV file. These attributes include:
        // * mag - magnitude
        // * type - earthquake or other event such as nuclear test
        // * place - location of the event
        // * time - the time of the event

        const template = {
          title: "Crime committed at {ILEADSStreet}",
        };

        // The heatmap renderer assigns each pixel in the view with
        // an intensity value. The ratio of that intensity value
        // to the maxPixel intensity is used to assign a color
        // from the continuous color ramp in the colorStops property

        const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#001219", ratio: 0.083 },
            { color: "#252433", ratio: 0.166 },
            { color: "#005F73", ratio: 0.249 },
            { color: "#0A9396", ratio: 0.332 },
            { color: "#94D2BD", ratio: 0.415 },
            { color: "#E9D8A6", ratio: 0.498 },
            { color: "#EE9B00", ratio: 0.581 },
            { color: "#CA6702", ratio: 0.664 },
            { color: "#BB3E03", ratio: 0.747 },
            { color: "#AE2012", ratio: 0.83 },
            { color: "#9B2226", ratio: 0.913 },
            { color: "#820000", ratio: 1 }
          ],
          maxPixelIntensity: 25,
          minPixelIntensity: 0
        };

        const layer = new CSVLayer({
          url: url,
          title: "St. Louis Crime Heatmap",
          copyright: "St. Louis Police Department",
          popupTemplate: template,
          renderer: renderer
        });

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.194, 38.6270],
          zoom: 11,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });
   
