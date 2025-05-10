import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Primary: Story = {
    args: {
        short: false,
    },
};
