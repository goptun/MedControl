import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { UsersProps } from "./interfaces";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MainStyled } from "./styled";

function Home() {
  const [, setUsers] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await api.get("/users");
      setUsers(response.data);
      setLoading(false);
    };
    load();
  }, []);
  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <MainStyled />
      <Footer />
    </>
  );
}

export { Home };
