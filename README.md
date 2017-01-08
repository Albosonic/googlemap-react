# googlemap-react

> Google Map React Component.


```shell
  npm install --save googlemap-react
```

```javascript

import GoogleMap from 'googlemap-react';
```

```html
<!-- dont forget to add this in your html -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOURE_API_KEY"></script>
```

```js

## parameters/props that get passed into the <GoogleMap /> component attributes are inherited 
## by the request object and used in the request to the google maps API 
## these are mock entries below. they should give you a hint about the input types expected by the API

**Example**

var request = {
   origin: this.props.origin,
   destination: this.props.destination,
   travelMode: travelMode,
   transitOptions: {
    arrivalTime: this.props.arrivalTime,
    departureTime: this.props.departureTime
  }
}

**Example**
 
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from 'googlemap-react';
import GoogleMapComponent from './GoogleMapComponent';

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
