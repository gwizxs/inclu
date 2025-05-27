import type { Meta, StoryObj } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    StoreDecorator({
      user: { authData: { id: '1', username: 'admin' } },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {
  args: {
    className: 'Primary',
  },
};
