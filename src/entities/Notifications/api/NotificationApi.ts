import { API_URL } from '@/shared/api/api_url';
import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query<Notification[], null>({
            query: () => ({
                url: API_URL.notifications(),
            }),
        }),
    }),
});

export const useNotificationsQuery = notificationApi.useGetNotificationsQuery;
