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

type Poi = { key: string; location: google.maps.LatLngLiteral; color: string };

type MyMapProps = {
  poiCenter: Poi;
};
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MyMap = ({ poiCenter }: MyMapProps) => (
  <APIProvider apiKey={apiKey}>
    <div className="googleMapsStyle">
      <Map mapId="MyMapId" defaultZoom={18} defaultCenter={poiCenter.location}>
        <PoiCenterMarkers poi={poiCenter} />
      </Map>
    </div>
  </APIProvider>
);

export default MyMap;
const PoiCenterMarkers = (props: { poi: Poi }) => {
  return (
    <>
      <AdvancedMarker key={props.poi.key} position={props.poi.location}>
        <Pin
          background={props.poi.color}
          glyphColor={"black"}
          borderColor={"#A14AFF"}
        />
      </AdvancedMarker>
    </>
  );
};
