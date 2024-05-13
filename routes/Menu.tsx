import axios from "npm:axios";
import Pelicula from "../components/Pelicula.tsx";
type Pelicula = {
    _id?: string;
    brand: string;
    name: string;
    iso: number;
    formatThirtyFive: boolean;
    formatOneTwenty: boolean;
    color: boolean;
    staticImageUrl: string; 
};


const menu = async () => { 
    try{
        const response = await axios.get<Pelicula[]>(
            "https://filmapi.vercel.app/api/films"
          );

        if (response && response.data) { 
            return (
                <div class="flex-column">
                  <h1 class="mainTitle">MEJORES PELICULAS EN EL MERCADO</h1>
                  <div class="flex-row flex-around">
                    {response.data.map((char, id) => (
                        <Pelicula
                        key={id}
                        brand={char.brand}
                        name={char.name}
                        iso={char.iso}
                        formatThirtyFive = {char.formatThirtyFive}
                        formatOneTwenty = {char.formatOneTwenty}
                        color={char.color}
                        staticImageUrl={char.staticImageUrl}
                        />
                    ))} 
        
                 </div>
                </div>
              );
        }else {
            return <div>Error: No se encontraron datos de superhéroes</div>;
        } 
    }catch (error) {
    return <div>Error: {error.message}</div>;
  }


};

export default menu;
