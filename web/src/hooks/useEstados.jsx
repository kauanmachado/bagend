import { useState, useEffect } from "react";
import axios from "axios";

const useEstados = () => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    axios
      .get("https://brasilapi.com.br/api/ibge/uf/v1")
      .then((response) => response.data)
      .then((data) => setEstados(data));
  }, []);

  return {
    estados,
  };
};

export default useEstados;
