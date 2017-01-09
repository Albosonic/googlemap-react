# googlemap-react

>  Google Map React Component.

To install enter this into your command line:
```shell
  npm install --save googlemap-react
```
To use as an import in you application include the below code:
```javascript
import GoogleMap from 'googlemap-react';
```
To get acces to the Google Maps API you must create your API KEY, you can do this at https://developers.google.com/maps/documentation/javascript/get-api-key, once you have received you key insert into the script tag below and add to you html file:
```html
<!-- dont forget to add this in your html -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOURE_API_KEY"></script>
```

parameters/props that get passed into the `<GoogleMap />` component attributes are inherited by the request object and used in the request to the google maps API these are mock entries below. they should give you a hint about the input types expected by the API

### Example
```js
var request = {
   origin: this.props.origin,
   destination: this.props.destination,
   travelMode: travelMode,
   transitOptions: {
    arrivalTime: this.props.arrivalTime,
    departureTime: this.props.departureTime
  }
}
```
### Example
 ```js
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from 'googlemap-react';

class App extends React.Component {
  constructor(props) {
    super(props);   
    console.log(GoogleMap);
  }

  render() {
    return (
      <div>        
        <GoogleMap
          arrivalTime={new Date()}
          departureTime={new Date()}
          destination={'chicago'}
          nMap={1}
          origin={'california'}
          modes={[] || null}
          travelMode={'TRANSIT'} />        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```
