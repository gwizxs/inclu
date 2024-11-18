import type { Meta, StoryObj } from '@storybook/react';
import {Modal} from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
}

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'Text',
        isOpen: true
    }
};

export const Dark: Story = {
    args: {
        children: 'Text',
        isOpen: true
    }
};
 
Dark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]