import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapted from 'axios-mock-adapter';

import useFetch from './useFetch';

test('useFetch performs GET request', async () => {
  const initialState = {
    data: {}
  }

  const mock = new MockAdapted(axios);

  const mockData = 'response';
  const URL = 'http://mock';
  mock.onGet(URL).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() => useFetch(URL, initialState));

  expect(result.current.data).toEqual(initialState);
  await waitForNextUpdate();
  expect(result.current.data).toEqual("response");
});

jest.unmock('axios');