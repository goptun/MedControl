import { Routes, Route } from "react-router-dom";
import { Mapas } from "../pages/mapa";
import { CadastraMedicamento } from "../pages/cadastraMedicamento";
import { ListaMedicamentos } from "../pages/listaMedicamentos";
import { NaoEncontrado } from "../pages/naoEncontrado";
import { Ajuda } from "../pages/ajuda";
import { CadastraFarmacia } from "../pages/cadastraFarmacia/Index";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Mapas />} />
      <Route path="/mapa" element={<Mapas />} />
      <Route path="/cadastra-farmacia" element={<CadastraFarmacia />} />
      <Route path="/cadastra-medicamentos" element={<CadastraMedicamento />} />
      <Route path="/lista-medicamentos" element={<ListaMedicamentos />} />
      <Route path="*" element={<NaoEncontrado />} />
      <Route path="/ajuda" element={<Ajuda />} />
    </Routes>
  );
}

export { PrivateRoutes };
