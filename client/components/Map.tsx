import React, { useContext, useEffect, useState } from 'react';
import ReactMapGL, {
  Marker,
  NavigationControl,
  ViewStateChangeEvent,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GiPositionMarker } from 'react-icons/gi';
import getCenter from 'geolib/es/getCenter';
import MapHoverContext from './MapHoverContext';
import styled from 'styled-components';

const Div = styled.div`
  .hovered {
    color: #151616 !important;
  }
`;

interface IViewPort {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  padding: { top: number; bottom: number; left: number; right: number };
  pitch: number;
}

interface ICenter {
  longitude: number;
  latitude: number;
}

const Map = ({ data }: any): JSX.Element => {
  //   Transform coordinates into required array of objects in the correct shape
  const coordinates: any[] = data.map((result) => ({
    latitude: result.coordinates.lat,
    longitude: result.coordinates.lng,
  }));

  const [viewState, setViewState] = useState<IViewPort>({
    width: '100%',
    height: '100%',
    latitude: 48.7172965,
    longitude: 2.2328253,
    bearing: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
    pitch: 0,
    zoom: 10,
  });

  // The latitude and longitude of the center of locations coordinates
  const center: false | ICenter = getCenter(coordinates);

  useEffect(() => {
    handleChangeViewPort(center);
  }, []);

  const handleChangeViewPort = (center) => {
    if (center) {
      setViewState({
        ...viewState,
        latitude: center.latitude,
        longitude: center.longitude,
      });
    }
  };

  const handleChangeViewState = (evt: ViewStateChangeEvent) => {
    setViewState({
      ...viewState,
      longitude: evt.viewState.longitude,
      latitude: evt.viewState.latitude,
    });
  };

  const { element, hovered } = useContext(MapHoverContext);
  useEffect(() => {
    if (element && hovered) {
      const divSelected = document.querySelectorAll('.mapbox-marker')[element];
      // @ts-ignore
      divSelected?.firstChild?.classList.add('hovered');
    } else {
      const divSelected = document.querySelectorAll('.mapbox-marker')[element];
      // @ts-ignore
      divSelected?.firstChild?.classList.remove('hovered');
    }
  }, [element, hovered]);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/light-v10"
      style={{
        height: '630px',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #ccc',
      }}
      initialViewState={viewState}
      {...viewState}
      onMove={handleChangeViewState}
      scrollZoom={false}
      mapboxAccessToken="pk.eyJ1IjoiZGlza285MSIsImEiOiJjbDE3aDB4NWoxM241M2NzZ2VwMXkzaWtzIn0.WFfEpqPF7r1VKKYGDYhAQw"
    >
      <NavigationControl showCompass={false} />
      {data.map((item) => (
        <Marker
          longitude={item.coordinates.lng}
          latitude={item.coordinates.lat}
          anchor="bottom"
          key={item.id}
        >
          <Div className="mapbox-marker">
            <GiPositionMarker size="2.9em" color="grey" className="" />
          </Div>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;
