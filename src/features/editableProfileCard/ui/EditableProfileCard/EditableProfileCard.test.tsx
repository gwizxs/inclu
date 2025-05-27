import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/library/tests/componentRender/componentRender';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { $api } from '@/shared/api/api';

const data: Profile = {
  id: '1',
  username: 'admin',
  age: 22,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'John',
  lastname: 'Doe',
  avatar: 'https://via.placeholder.com/150',
};

const options = {
  initialState: {
    profile: {
      form: data,
      readonly: true,
      data,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('test toggle readonly', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
    expect(
      screen.getByTestId('EditableProfileCard.CancelButton'),
    ).toBeInTheDocument();
  });

  test('on cancel form should be reset', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'Moscow');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'Moscow');

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Moscow');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Moscow');

    await userEvent.click(
      screen.getByTestId('EditableProfileCard.CancelButton'),
    );

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('John');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Doe');
  });
  test('on error should be shown', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph'),
    ).toBeInTheDocument();
  });

  test('on do not have error should be send PUT request', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    const mockPutRequest = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'Moscow');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'Moscow');

    await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
