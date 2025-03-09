import { useForm, Controller } from "react-hook-form";
import SelectPokemon from "./SelectPokemon";

interface FormData {
  firstName: string;
  lastName: string;
  team: any[];
}

interface TrainerFormProps {
  onSubmit: (team: any[]) => void;
}

const TrainerForm = ({ onSubmit }: TrainerFormProps) => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>();

  const submitHandler = (data: FormData) => {
    onSubmit(data.team);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="p-4 space-y-4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-semibold mb-1">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          {...control.register("firstName", { required: true, minLength: 2, maxLength: 12 })}
          className="border p-2 w-full"
        />
        {errors.firstName && (
          <span className="text-red-500">First name is required (2-12 characters)</span>
        )}
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-semibold">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          {...control.register("lastName", { required: true, minLength: 2, maxLength: 12 })}
          className="border p-2 w-full"
        />
        {errors.lastName && (
          <span className="text-red-500">Last name is required (2-12 characters)</span>
        )}
      </div>

      <Controller
        control={control}
        name="team"
        rules={{ required: true, validate: (value) => value.length === 4 }}
        render={({ field }) => (
          <div className="h-100 overflow-y-scroll border border-gray-300 p-2 rounded-md">
            <SelectPokemon onChange={field.onChange} />
          </div>
        )}
      />

      {errors.team && (
        <span className="text-red-500">You must select exactly 4 Pokémon.</span>
      )}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
        Submit
      </button>
    </form>
  );
};

export default TrainerForm;

