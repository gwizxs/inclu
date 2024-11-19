import type { Meta, StoryObj } from '@storybook/react';
import {Input} from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Text',
        value: '12344'
    }
};

export const Dark: Story = {
    args: {
        placeholder: 'Text',
        value: '12344'
    }
};
 
Dark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]