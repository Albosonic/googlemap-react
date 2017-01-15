# googlemap-react

>  Google Map React Component.

- [see on github](https://github.com/Albosonic/googlemap-react)

To install enter this into your command line:
```shell
npm install --save googlemap-react
```
To use as an import in your application, include the following line in your React code:
```javascript
import GoogleMap from 'googlemap-react';
```
To get access to the Google Maps API you must first create your API KEY, you can do this at https://developers.google.com/maps/documentation/javascript/get-api-key. Once you have received your key, insert the script tag below into your html file:
```html
<!-- dont forget to add this in your html -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

![Alt text](/assets/npm-map-screen-shot.jpg?raw=true "Screen Shot") 

>Built-in form and submit button for origin and destination routing with step by step directions.

>ClassNames: "container-map" "map" "map-form" "map-input" "map-directions-button"
are provided for styling they are nested in that order. Also for directions styling, we have: "container-directions" and "directions-item" 

### Example
 ```js
 import React from 'react';
 import ReactDOM from 'react-dom';
 import GoogleMap from 'googlemap-react';

 class App extends React.Component {
   constructor(props) {
    super(props); 
   }

   render() {
     return (
       <div>  
         <div>  
          <!-- nMap gets concatenated to a string to provide a unique id to the DOM for every map instance -->
           <GoogleMap nMap={ 1 } />        
         </div>
       </div>
     );
   }
 }

 ReactDOM.render(<App />, document.getElementById('app'));
```
