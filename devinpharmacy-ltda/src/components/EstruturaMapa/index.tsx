//Componente responsável por renderizar o mapa com as farmácias cadastradas.

import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainerStyled, PopupStyled } from "./styled";

//Declaração do componente EstruturaMapa
function EstruturaMapa() {
  let listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"));

  //Renderização do componente
  return (
    <MapContainerStyled
      center={[-27.59105103459484, -48.511791875125546]}
      zoom={13}
      scrollWheelZoom={false}
    >
      {/* Configuração do mapa */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Renderização dos marcadores no mapa */}
      {listaFarmacias.map((farmacia) => (
        <Marker
          position={[farmacia.latitude, farmacia.longitude]}
          key={farmacia.id}
        >
          {/* Configuração do popup */}
          <PopupStyled>
            <h6>{farmacia.nome}</h6>
            <span>
              <b>Razão Social:</b> {farmacia.razao}
            </span>
            <br />
            <span>
              <b>CNPJ:</b> {farmacia.cnpj}
            </span>
            <br />
            <span>
              <b>Endereço:</b> {farmacia.logradouro},{farmacia.numero} -{" "}
              {farmacia.bairro} - {farmacia.cidade}/{farmacia.estado}
            </span>
            <br />
            {farmacia.complemento ? (
              <span>
                <b>Complemento:</b> {farmacia.complemento}
                <br />
              </span>
            ) : null}
            <span>
              <b>E-mail:</b> {farmacia.email}
            </span>
            <br />
            {farmacia.telefone ? (
              <span>
                <b>Telefone:</b> {farmacia.telefone}
                <br />
              </span>
            ) : null}
            <span>
              <b>Celular:</b> {farmacia.celular}
            </span>
            <br />
          </PopupStyled>
        </Marker>
      ))}
    </MapContainerStyled>
  );
}

//Exportação do componente
export { EstruturaMapa };
