interface ModalProps {
    team: any[];
    onClose: () => void;
  }
  
  const Modal = ({ team, onClose }: ModalProps) => {
    const getPokemonId = (url: string) => {
      const parts = url.split("/");
      return parts[parts.length - 2]; 
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-lightgrey p-4 rounded">
          <button onClick={onClose} className="absolute top-0 right-0">
            X
          </button>
          <div className="flex gap-4 bg-white h-30 w-100 items-center justify-center rounded-md">
            {team.map((pokemon) => (
              <div key={pokemon.name} className="m-2">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
                    pokemon.url
                  )}.png`}
                  alt={pokemon.name}
                  className="object-contain w-26 h-26"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  
  
  
