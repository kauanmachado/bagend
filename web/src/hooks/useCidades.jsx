import { useEffect, useState } from "react";
import axios from "axios";

const useCidades = ({ uf }) => {
  const [cidades, setCidades] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uf) return;

    setLoading(true);
    axios
      .get(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((response) => response.data)
      .then((data) => setCidades(data))
      .then(() => setLoading(false));
  }, [uf]);

  return {
    cidades,
    loading,
  };
};

export default useCidades;
