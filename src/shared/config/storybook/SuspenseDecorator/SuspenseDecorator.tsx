import { Decorator } from '@storybook/react/*';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader';

export const SuspenseDecorator: Decorator = (Story) => (
  <Suspense fallback={<Loader />}>
    <Story />
  </Suspense>
);
