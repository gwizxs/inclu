import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ActiclePageGreeting } from './ActiclePageGreeting';

export default {
    title: 'features/ActiclePageGreeting',
    component: ActiclePageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ActiclePageGreeting>;

const Template: ComponentStory<typeof ActiclePageGreeting> = (args) => <ActiclePageGreeting {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};