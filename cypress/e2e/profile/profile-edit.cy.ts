let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'test');
    });
    it('И редактирует его', () => {
        const newName = 'new';
        const newLastname = 'lastname';
        cy.getByTestId('EditableProfileCard.EditButton').click();
        cy.getByTestId('ProfileCard.FirstName').clear().type(newName);
        cy.getByTestId('ProfileCard.LastName').clear().type(newLastname);
        cy.getByTestId('EditableProfileCard.SaveButton').click();
        cy.getByTestId('ProfileCard.FirstName').should('have.value', newName);
        cy.getByTestId('ProfileCard.LastName').should('have.value', newLastname);
    });
});
