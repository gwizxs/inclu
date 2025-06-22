import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'shared/PageLoader',
  component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
