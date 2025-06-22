import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ActiclePageGreeting } from './ActiclePageGreeting';

const meta: Meta<typeof ActiclePageGreeting> = {
  title: 'features/ActiclePageGreeting',
  component: ActiclePageGreeting,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ActiclePageGreeting>;

export const Normal: Story = {
    args: {
        className: 'default-class',
    },
};