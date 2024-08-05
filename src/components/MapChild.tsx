import React, { useEffect } from "react";
import { useMap } from "react-map-gl";

export default function MapChild() {
  const { current: map } = useMap();
  useEffect(() => {
    console.log({ bounds: map?.getBounds()?.toArray() });
    return () => {};
  }, [map]);
  return <div></div>;
}
