import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import Filtros from "../components/Filtros.tsx";

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

type Props = {
    onFilterChange: (filteredPeliculas: Pelicula[]) => void;
};

const Filter = ({ onFilterChange }: Props) => {
    const name = useSignal<string>("");
    const color = useSignal<string>("any");
    const formatThirtyFive = useSignal<boolean>(false);
    const formatOneTwenty = useSignal<boolean>(false);

    useEffect(() => {
        fetch(`https://filmapi.vercel.app/api/films`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data: Pelicula[]) => {
                const filteredPeliculas = data.filter((pelicula) => {
                    return (
                        pelicula.name.toLowerCase().includes(name.value.toLowerCase()) &&
                        (color.value === "any" || pelicula.color.toString() === color.value) &&
                        (!formatThirtyFive.value || pelicula.formatThirtyFive) &&
                        (!formatOneTwenty.value || pelicula.formatOneTwenty)
                    );
                });
                onFilterChange(filteredPeliculas); 
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, [name, color, formatThirtyFive, formatOneTwenty, onFilterChange]);

    return <Filtros name={name} color={color} formatThirtyFive={formatThirtyFive} formatOneTwenty={formatOneTwenty} />;
};

export default Filter;