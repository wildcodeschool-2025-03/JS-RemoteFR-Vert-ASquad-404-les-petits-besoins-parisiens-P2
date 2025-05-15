/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  APIProvider,
  AdvancedMarker,
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import "../../assets/styles/card.css";

type Poi = { key: string; location: google.maps.LatLngLiteral };

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const locations: Poi[] = [
  {
    key: "firstToiletResult",
    location: { lat: 48.88445504769741, lng: 2.3427360292097643 },
  },
];
const firstToiletResult = { lat: 48.88445504769741, lng: 2.3427360292097643 };
const MyMap = () => (
  <APIProvider apiKey={apiKey}>
    <div className="googleMapsStyle">
      <Map mapId="MyMapId" defaultZoom={17} defaultCenter={firstToiletResult}>
        <PoiMarkers pois={locations} />
      </Map>
    </div>
  </APIProvider>
);

export default MyMap;
const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin background={"red"} glyphColor={"#000"} borderColor={"#000"} />
        </AdvancedMarker>
      ))}
    </>
  );
};
