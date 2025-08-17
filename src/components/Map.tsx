import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Coordenadas extraídas de la URL de Google Maps
// https://maps.app.goo.gl/3nytamXqnGjdzVLF9 apunta a Medellín, Colombia
const MEDELLIN_COORDS: [number, number] = [-75.5636, 6.2442];
const MAPBOX_TOKEN = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHhobjZ6NHEwNXkwMmtvOG1qN2Zod3VqIn0.lsJxEUqJ5JURT5FFagm2dQ';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 14,
      center: MEDELLIN_COORDS,
    });

    // Agregar marcador en la ubicación
    new mapboxgl.Marker({
      color: 'hsl(var(--primary))'
    })
      .setLngLat(MEDELLIN_COORDS)
      .addTo(map.current);

    // Agregar controles de navegación
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg" />
  );
};

export default Map;