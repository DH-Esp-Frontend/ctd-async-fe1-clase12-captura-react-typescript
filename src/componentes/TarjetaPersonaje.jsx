

const TarjetaPersonaje = ({ image, nombre, especie, episode }) =>{
    const numeroEpisodios = episode.length + 1

    return  (
        <div id="tarjeta">
            <img src={image} alt={nombre} />
            <div>
                <h2>{nombre}</h2>
                <h3>{especie}</h3>
                <h4>Apariciones en episodios: {numeroEpisodios}</h4>
            </div>
        </div>
    )
};
  
  export default TarjetaPersonaje;
  