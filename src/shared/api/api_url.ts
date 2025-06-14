export const API_URL = {
  articles: () => '/articles',
  notifications: () => '/notifications',
  articleRating: () => '/article-ratings',
  users: (id: string) => `/users/${id}`,
};
