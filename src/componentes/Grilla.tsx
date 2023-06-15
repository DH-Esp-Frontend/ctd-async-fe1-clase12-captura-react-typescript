import { useEffect, useState } from "react";
import { APIresponse, Personajes } from "../types";
import TarjetaPersonaje from "./TarjetaPersonaje";


export const obtenerPersonajes = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: APIresponse = await res.json();
  
    return data;
  };


const Grilla = () => {
  const [personajes, setPersonajes] = useState<Personajes|[]>([])

  useEffect(() => {
    obtenerPersonajes()
    .then(data => setPersonajes(data.results))
  }, [personajes])

  return (
    <>
        {  
            personajes.length
            ? personajes.map((personaje) => (
                <TarjetaPersonaje {...personaje}  />))
            : null
        }
    </>)
};

export default Grilla;
