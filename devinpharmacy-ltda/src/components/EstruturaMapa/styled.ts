import { MapContainer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
export const MapContainerStyled = styled(MapContainer)`
  font-family: JetBrains Mono, monospace;
  margin-top: 5em;
  width: 100%;
  height: 70vh;
  z-index: 0;
  position: relative;

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 590px) {
    height: 50vh;
  }

  @media (max-width: 400px) {
    height: 40vh;
  }
`;
export const MarkerStyled = styled(Marker)``;
export const PopupStyled = styled(Popup)`
  border-radius: 1rem;
`;
