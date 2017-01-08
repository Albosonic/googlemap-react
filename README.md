# googlemap-react

> Google Map React Component.

  Install:
  npm install --save googlemap-react
  
```javascript

import GoogleMap from 'googlemap-react';
```
<GoogleMap 
arrivalTime={new Date()}
departureTime={new Date()}
destination={'chicago'}
nMap={1} 
origin={'california'} 
modes={[] || null}
travelMode={'TRANSIT'} />  

```js

## the parameters sor these attributes are inherited by the request objest in the google maps api call
## these are mock entries. they should give you a hint about the input types expected by the API

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
