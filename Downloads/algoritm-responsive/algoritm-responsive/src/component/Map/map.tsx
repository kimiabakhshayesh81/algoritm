'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

function MapComponent() {

  const position = [35.78617, 51.42593];

  return (
    <div className="w-full h-full">
      <MapContainer
        className="w-full h-full z-10 relative"
        center={position}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={redIcon}>
          <Popup>مکان شرکت ما در خیابان الهیه، مریم شرقی</Popup>
        </Marker>
      </MapContainer>
    </div>
    )
}

export default MapComponent;










// 'use client';

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // آیکن قرمز
// const redIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   shadowSize: [41, 41],
// });

// function MapComponent() {
//   const position = [35.78617, 51.42593];

//   return (
//     <MapContainer
//       center={position}
//       zoom={16}
//       scrollWheelZoom={false}
//       className="w-full h-full"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position} icon={redIcon}>
//         <Popup>مکان شرکت ما در خیابان الهیه، مریم شرقی</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// export default MapComponent;
