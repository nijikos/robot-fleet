// ---------- REACT/NEXT ----------
import React, { useState } from "react";
import Image from "next/image";
// ---------- TYPES ----------
import { ICoordinate, IPopup } from "@/types";
// ---------- LIBRARIES ----------
import Map, { Marker, Popup } from "react-map-gl";
// ---------- DATA ----------
import { mapboxToken, pixelCoordinates } from "@/@data/mapData";
// ---------- HELPERS ----------
import { rotatePoint } from "@/helpers";

export default function MapView2() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupInfo, setPopupInfo] = useState<IPopup | null>(null);

  const centerX = 1629 / 2;
  const centerY = 1245 / 2;
  const angle = -7;

  const rotatedCoordinates = pixelCoordinates.map((point) =>
    rotatePoint(point.x, point.y, angle, centerX, centerY, point.heading)
  );

  return (
    <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        bounds: [
          [103.77842550529647, 1.298994151284731],
          [103.78197449470622, 1.301705847985005],
        ],
        zoom: 18.7,
      }}
      style={{ width: 1629, height: 1245 }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      scrollZoom={false}
      dragPan={false}
      doubleClickZoom={false}
    >
      {rotatedCoordinates.map((coord, index) => {
        const hc = coord.headingClass;
        return (
          <Marker
            className='cursor-pointer'
            key={index}
            longitude={103.77842550529647}
            latitude={1.301705847985005}
            offset={[coord.x, coord.y]}
          >
            <Image
              src='/icons/arrow-up.svg'
              alt='Marker Arrow'
              width={24}
              height={24}
              className={`${hc}`}
              onMouseEnter={() => {
                setShowPopup(true);
                setPopupInfo({ ...coord, label: `Robot 00${index + 1}` });
              }}
              onMouseOut={() => {
                setShowPopup(false);
                setPopupInfo(null);
              }}
            />
          </Marker>
        );
      })}

      {showPopup && (
        <Popup
          longitude={103.77842550529647}
          latitude={1.301705847985005}
          anchor='bottom'
          offset={[popupInfo?.x, popupInfo?.y]}
          onClose={() => setShowPopup(false)}
          closeButton={false}
        >
          <div className='bg-white px-4 py-2 w-52'>
            <p className='text-lg'>{popupInfo?.label}</p>
            <div className='border-t border-solid border-gray-300'></div>
            <p className='font-semibold'>Local Coordinate X</p>
            <p className='pl-2'>{popupInfo?.originalX}</p>
            <p className='font-semibold'>Local Coordinate Y</p>
            <p className='pl-2'>{popupInfo?.originalY}</p>
            <p className='font-semibold'>Headings</p>
            <p className='pl-2'>{popupInfo?.originalHeading} deg</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
