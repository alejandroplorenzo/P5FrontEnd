import { FunctionComponent } from "preact";

type PeliculaProps = {
  _id?: string;
  brand: string;
  name: string;
  iso: number;
  formatThirtyFive: boolean;
  formatOneTwenty: boolean;
  color: boolean;
  staticImageUrl: string; 
};

const Pelicula: FunctionComponent<PeliculaProps> = (props) => {
  const { brand, name, iso, formatThirtyFive, formatOneTwenty, color, staticImageUrl} = props;
  return (
    <div class="peliculaContainer">
      <h2 class="text-overflow">Name: {name}</h2>
      <img class="img-m half-rounded" src={staticImageUrl} />
      <p>Brand: {brand}</p>
      <p>ISO: {iso}</p>
      <p>FormatThirtyFive: {formatThirtyFive ? 'True' : 'False'}</p>
      <p>FormatOneTwenty: {formatOneTwenty ? 'True' : 'False'}</p>
      <p>{color ? 'Tiene color' : 'No tiene color'}</p>

      
    </div>
  );
};

export default Pelicula;


