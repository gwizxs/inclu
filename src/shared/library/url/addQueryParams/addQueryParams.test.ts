import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('test addQueryParams', () => {
    const params = getQueryParams({
      test: '123',
    });
    expect(params).toBe('?test=123');
  });

  test('test addQueryParams', () => {
    const params = getQueryParams({
      test: '123',
      second: '1',
    });
    expect(params).toBe('?test=123&second=1');
  });

  test('test addQueryParams', () => {
    const params = getQueryParams({
      test: '123',
      second: undefined,
    });
    expect(params).toBe('?test=123');
  });
});
