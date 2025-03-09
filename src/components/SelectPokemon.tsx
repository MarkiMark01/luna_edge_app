import { useEffect, useState } from "react";
import axios from "axios";

interface SelectPokemonProps {
  onChange: (team: any[]) => void;
}

const SelectPokemon = ({ onChange }: SelectPokemonProps) => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => setPokemonList(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleSelect = (pokemon: any) => {
    let newSelected;
    if (selected.includes(pokemon)) {
      newSelected = selected.filter((p) => p !== pokemon);
    } else if (selected.length < 4) {
      newSelected = [...selected, pokemon];
    } else {
      return;
    }
    setSelected(newSelected);
    onChange(newSelected);
  };
  
  const filteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search for Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full"
      />
      <div className="grid grid-cols-5 gap-1">
        {filteredPokemons.map((pokemon, index) => (
          <div
            key={index}
            onClick={() => handleSelect(pokemon)}
            className={`pokemon-card flex flex-col items-center cursor-pointer p-2 rounded-md border ${
              selected.includes(pokemon)
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            }`}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
              alt={pokemon.name}
              className="w-16 h-16 object-contain"
            />
            <span className="text-xs text-center">{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectPokemon;



