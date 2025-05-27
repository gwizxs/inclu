import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/library/tests/componentRender/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID,
                username: 'admin',
                avatar: 'https://x.com/i/web/status/1732641424130439168',
              },
            },
          },
        }}
      >
        <EditableProfileCard id={USER_ID} />
      </TestProvider>,
    );
  });
});
