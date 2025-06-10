import { API_URL } from '@/shared/api/api_url';
import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/user';

interface SaveJsonSettingsArgs {
    userId: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        saveJsonSettings: builder.mutation<User, SaveJsonSettingsArgs>({
            query: ({ userId, jsonSettings }) => ({
                url: API_URL.users(userId),
                method: 'PATCH',
                body: jsonSettings,
            }),
        }),
        getUserDataById: builder.query<User, string>({
            query: (userId) => ({
                url: API_URL.users(userId),
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettingsMutation = userApi.endpoints.saveJsonSettings.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;