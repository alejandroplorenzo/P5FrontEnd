import { PageProps } from "$fresh/server.ts";
import Filter from "../islands/Filter.tsx";
import Menu from "./Menu.tsx"; 


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

const Layout = (props: PageProps) => {
    const Component = props.Component;
    return (
        <div>
            <Filter onFilterChange={(filteredPeliculas: Pelicula[]) => console.log(filteredPeliculas)} /> 
            <Component /> 
        </div>
    );
};
export default Layout;
