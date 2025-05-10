import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'dark',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#000000' },
                { name: 'dark', class: Theme.DARK, color: '#ffffff' },
                { name: 'orange', class: Theme.ORANGE, color: '#ffa500' },
            ],
        },
    },
    decorators: [StyleDecorator,
        (Story) => ThemeDecorator(Theme.LIGHT)(Story),
        RouterDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
