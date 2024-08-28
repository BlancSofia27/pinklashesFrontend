import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Corrige el problema del ícono predeterminado de Leaflet
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

const Map = React.forwardRef((props, ref) => {
  const position = [-31.663322, -59.906388] // Coordenadas de Maria Grande

  return (
    <section ref={ref} id="map">
      <div className="flex flex-col items-center justify-center min-h-8 bg-gray-100 my-4">
        <h3 className="text-sm">María Grande, Entre Ríos.</h3>
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={false}
          className="w-full h-96"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>María Grande</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
})

Map.displayName = "Map"
export default Map
