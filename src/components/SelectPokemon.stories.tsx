import { Meta, StoryObj } from "@storybook/react";
import SelectPokemon from "./SelectPokemon";

export default {
  title: "SelectPokemon",
  component: SelectPokemon,
} as Meta<typeof SelectPokemon>;

const Template: StoryObj<typeof SelectPokemon> = {
  render: (args) => <SelectPokemon {...args} />,
};

export const Default = {
  ...Template,
  args: {
    onChange: (team: any[]) => console.log(team),
  },
};
