import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainerStyled } from "./styled";

function EstruturaMapa() {
  let listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"));

  return (
    <div style={{ position: "fixed" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MapContainerStyled
          center={[-27.59105103459484, -48.511791875125546]}
          zoom={13}
          scrollWheelZoom={true}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {listaFarmacias.map((farmacia) => (
            <Marker
              position={[farmacia.latitude, farmacia.longitude]}
              key={farmacia.id}
            >
              <Popup>
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
              </Popup>
            </Marker>
          ))}
        </MapContainerStyled>
      </div>
    </div>
  );
}

export { EstruturaMapa };
