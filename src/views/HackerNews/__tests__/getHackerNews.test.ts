import { renderHook } from '@testing-library/react-native';
import useHackerNewsViewModel from '../useHackerNewsViewModel';

const mockGetHackerNewsAPI = jest.fn();

jest.mock('../../../models/news/API/news', () => ({
  __esModule: true,
  getHackerNewsAPI: () => mockGetHackerNewsAPI(),
}));

jest.mock('zustand/react/shallow', () => ({
  __esModule: true,
  useShallow: (fn: any) => fn,
}));

jest.mock('../../../models/news/store/hackerNewsStore', () => {
  const mockState = {
    hackerNews: [],
    deletedHackerNews: [],
    favoritesHackerNews: [],
    changeHackerNews: jest.fn(),
    changeFavoritesHackerNews: jest.fn(),
    changeDeletedHackerNews: jest.fn(),
  };

  return {
    __esModule: true,
    useHackerNewStore: (selector: any) => selector(mockState),
  };
});

jest.mock('../../../models/news/storage/hackerNewsStorage', () => ({
  __esModule: true,
  setHackerNewsStorage: jest.fn(),
  setDeletedHackerNewsStorage: jest.fn(),
  setFavoritesHackerNewsStorage: jest.fn(),
}));

jest.mock(
  '../../../models/notifications/android/storage/notificationsAndroidStorage',
  () => ({
    __esModule: true,
    getURLStorage: jest.fn(),
    removeURLStorage: jest.fn(),
  }),
);

describe('useHackerNewsViewModel - getHackerNews (unit)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns { message: "success", response } when API resolves', async () => {
    const fakeResponse = { hits: [] } as any;
    mockGetHackerNewsAPI.mockResolvedValueOnce(fakeResponse);

    const { result } = renderHook(() => useHackerNewsViewModel());
    const res = await result.current.getHackerNews();

    expect(mockGetHackerNewsAPI).toHaveBeenCalledTimes(1);
    expect(res.message).toBe('success');

    if (res.message === 'success') {
      expect(res.response).toEqual(fakeResponse);
    } else {
      throw new Error('Expected success but got error');
    }
  });

  it('returns { message: "error", error } when API rejects', async () => {
    const err = new Error('boom');
    mockGetHackerNewsAPI.mockRejectedValueOnce(err);

    const { result } = renderHook(() => useHackerNewsViewModel());
    const res = await result.current.getHackerNews();

    expect(mockGetHackerNewsAPI).toHaveBeenCalledTimes(1);
    expect(res.message).toBe('error');

    if (res.message === 'error') {
      expect(res.error).toBe(err);
    } else {
      throw new Error('Expected error but got success');
    }
  });
});
