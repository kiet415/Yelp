import React from "react"
import MarkerManager from "../../util/marker_manager";
class KelpMap extends React.Component {
    //...
  
    componentDidMount() {
      // set the map to show SF
      const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 }, // this is SF
        zoom: 13,
      };
  
      // wrap this.mapNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      if(this.props.singleBusiness) {
        this.props.fetchBusiness(this.props.businessId);
      } else {
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.businesses)
      }

    }
    componentDidUpdate() {
      if (this.props.singleBusiness) {
        const targetBusinessKey= Object.keys(this.props.businesses)[0];
        const targetBusiness = this.props.businesses[targetBusinessKey];
        this.MarkerManager.updateMarkers([targetBusiness]);
      } else {
        this.MarkerManager.updateMarkers(this.props.businesses);
      }
    }
    registerListeners() {
      google.maps.event.addListener(this.map , 'idle', () => {
        const {north, south, east, west} = this.map.getBounds().toJSON();
        const bounds = {
          northEast: {lat:north, lng:east},
          southWest: {lat:south, lng:west} };
        this.props.updateFilter('bounds', bounds);
      })
      google.maps.event.addListener(this.map, 'click', (event) => {
        const coords = getCoordsObj(event.latLng);
        this.handleClick(coords);
      })
    }
    handleMarkerClick(business) {
      this.props.history.push(`business/${business.id}`);
    }
    handleClick(coords) {
      this.props.history.push({
        pathname: 'business',
        search: `lat=${coords.lat}&lng=${coords.lng}`
      })
    }
    render() {
      return (
        // ...
        <div className="kelp-map"  ref={ map => this.mapNode = map }> </div>
      )
    }
  
    //...
  }

  export default KelpMap