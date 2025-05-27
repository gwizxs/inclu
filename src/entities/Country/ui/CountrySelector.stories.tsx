import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { Country } from '../model/types/country';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/Country/CountrySelect',
  component: CountrySelect,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
  args: {
    value: Country.Russia,
  },
};
