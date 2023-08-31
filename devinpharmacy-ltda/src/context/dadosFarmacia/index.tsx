import { createContext, useContext, useState, ReactNode } from "react";

//Contexto para armazenar os dados da farmácia, como o CEP e a latitude e longitude.
interface LatLng {
  latitude: string;
  longitude: string;
}

interface DadosFarmaciaContextData {
  cepInformado: string;
  setCepInformado: (cep: string) => void;
  latLng: LatLng;
  setLatLng: (coords: LatLng) => void;
}

const DadosFarmaciaContext = createContext<DadosFarmaciaContextData>(
  {} as DadosFarmaciaContextData
);

interface DadosFarmaciaProviderProps {
  children: ReactNode;
}

const DadosFarmaciaProvider: React.FC<DadosFarmaciaProviderProps> = ({
  children,
}) => {
  const [cepInformado, setCepInformado] = useState("");
  const [latLng, setLatLng] = useState<LatLng>({
    latitude: "",
    longitude: "",
  });

  return (
    <DadosFarmaciaContext.Provider
      value={{
        cepInformado,
        setCepInformado,
        latLng,
        setLatLng,
      }}
    >
      {children}
    </DadosFarmaciaContext.Provider>
  );
};

const useDadosFarmacia = () => {
  return useContext(DadosFarmaciaContext);
};

export { DadosFarmaciaProvider, useDadosFarmacia, DadosFarmaciaContext };
