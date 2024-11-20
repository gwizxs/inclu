import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from '../../src/app/providers/ThemeProvider';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {TranslationDecorators} from '../../src/shared/config/storybook/TranslationDecorators/TranslationDecorators';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator,
        TranslationDecorators,
        (Story) => ThemeDecorator(Theme.LIGHT)(Story),
        RouterDecorator,
    ],
};


export default preview;