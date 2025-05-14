import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const meta: Meta<typeof VStack> = {
    title: 'shared/Stack/VStack',
    component: VStack,
};

export default meta;
type Story = StoryObj<typeof VStack>;

export const Column: Story = {
    args: {
        children: (
            <>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </>
        ),
    },
};
