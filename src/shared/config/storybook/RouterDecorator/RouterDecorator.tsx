import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
