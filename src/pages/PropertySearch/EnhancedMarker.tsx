// `EnhancedMarker` has the same API as `Marker`, apart from the `icon` can be a React component.
import { useId, useMemo, useState } from 'react';
import { Marker } from 'react-leaflet';
import { createPortal } from 'react-dom';
import L from 'leaflet';

const EnhancedMarker = ({
  // @ts-expect-error use any type for now
  eventHandlers,
  // @ts-expect-error use any type for now
  icon: providedIcon,
  ...otherProps
}) => {
  const [markerRendered, setMarkerRendered] = useState(false);
  const id = 'marker-' + useId();

  const icon = useMemo(
    () =>
      L.divIcon({
        html: `<div id="${id}"></div>`,
        popupAnchor: [15, 0],
      }),
    [id],
  );

  return (
    <>
      <Marker
        position={otherProps.position}
        {...otherProps}
        eventHandlers={{
          ...eventHandlers,
          add: (...args) => {
            setMarkerRendered(true);
            if (eventHandlers?.add) eventHandlers.add(...args);
          },
          remove: (...args) => {
            setMarkerRendered(false);
            if (eventHandlers?.remove) eventHandlers.remove(...args);
          },
        }}
        icon={icon}
      />
      {markerRendered && createPortal(providedIcon, document.getElementById(id)!)}
    </>
  );
};

export default EnhancedMarker;
