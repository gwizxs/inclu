import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const meta: Meta<typeof EditableProfileCardHeader> = {
  title: 'features/editableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Russia,
          currency: Currency.RUB,
          lastname: 'Админов',
          first: 'Админ',
          city: 'Москва',
        },
        readonly: true,
        data: {
          username: 'admin',
          age: 22,
          country: Country.Russia,
          currency: Currency.RUB,
          lastname: 'Админов',
          first: 'Админ',
          city: 'Москва',
          id: '1',
        },
      },
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
    }),
  ],
};

export const Editing: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Russia,
          currency: Currency.RUB,
          lastname: 'Админов',
          first: 'Админ',
          city: 'Москва',
        },
        readonly: false,
        data: {
          username: 'admin',
          age: 22,
          country: Country.Russia,
          currency: Currency.RUB,
          lastname: 'Админов',
          first: 'Админ',
          city: 'Москва',
          id: '1',
        },
      },
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
    }),
  ],
};
