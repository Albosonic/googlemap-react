# googlemap-react

>  Google Map React Component.

- [see on github](https://github.com/Albosonic/googlemap-react)

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
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

![Alt text](/assets/npm-map-image.jpg?raw=true "Screen Shot") 

>Built in form and submit button for origin and destination routing.

>ClassNames: "container-map" "map" "map-form" "map-input" "map-directions-button"
are provided for styling they are nested in that order.

### Example
 ```js
 import React from 'react';
 import ReactDOM from 'react-dom';
 import GoogleMapComponent from './GoogleMapComponent';

 class App extends React.Component {
   constructor(props) {
    super(props); 
   }

   render() {
     return (
       <div>  
         <div>  
          <!-- nMap gets concatinated to a string to provide a unique id to the DOM every for every map instance -->
           <GoogleMapComponent nMap={ 1 } />        
         </div>
       </div>
     );
   }
 }

 ReactDOM.render(<App />, document.getElementById('app'));
```
