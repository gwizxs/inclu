import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import icon from '@/shared/assets/icons/copy-20-20.svg';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100px', height: '100px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    Svg: icon,
  },
};
