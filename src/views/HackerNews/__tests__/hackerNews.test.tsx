import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HackerNewsScreen from '../HackerNewsScreen';

const mockGoToFavorites = jest.fn();
const mockGoToDeleted = jest.fn();
const mockGoToSettings = jest.fn();
const mockOpenItem = jest.fn();
const mockToggleFavorite = jest.fn();

const mockNews = [
  {
    objectID: '1',
    author: 'Arturo',
    created_at: '2025-12-14',
    title: 'First news',
    story_title: null,
    story_url: 'https://example.com/1',
  },
  {
    objectID: '2',
    author: 'Juan',
    created_at: '2025-12-13',
    title: null,
    story_title: 'Second news (story_title)',
    story_url: 'https://example.com/2',
  },
];

const mockDeletedIds = ['2'];
const mockFavoriteIds = ['1'];

jest.mock('../useHackerNewsViewController', () => ({
  __esModule: true,
  default: () => ({
    onPressFavoritesHackerNews: mockGoToFavorites,
    onPressDeletedHackerNews: mockGoToDeleted,
    onPressSettings: mockGoToSettings,

    onRefresh: jest.fn(),
    hackerNews: mockNews,
    isLoading: false,
    onPressFavorite: mockToggleFavorite,
    onSwipe: jest.fn(),
    onPressItem: mockOpenItem,

    deletedHackerNews: mockDeletedIds,
    favoritesHackerNews: mockFavoriteIds,
  }),
}));

jest.mock('../../components/ScreenContainer/ScreenContainer', () => ({
  __esModule: true,
  default: ({ children }: any) => children,
}));

jest.mock(
  '../components/HackerNewsScrollViewList/HackerNewsScrollViewList',
  () => {
    const React = require('react');
    const { View, Text, Button } = require('react-native');

    return {
      __esModule: true,
      default: ({
        hackerNews,
        deletedHackerNews,
        favoritesHackerNews,
        onPressItem,
        onPressFavorite,
      }: any) => {
        const visible = hackerNews.filter(
          (n: any) => !deletedHackerNews.includes(n.objectID),
        );

        return React.createElement(
          View,
          { testID: 'hn-list' },
          visible.map((n: any) => {
            const label = n.title
              ? n.title
              : n.story_title
              ? n.story_title
              : 'Missing title';

            const isFav = favoritesHackerNews.includes(n.objectID);

            return React.createElement(
              View,
              { key: n.objectID, testID: `hn-item-${n.objectID}` },
              React.createElement(Text, null, label),
              React.createElement(Button, {
                title: 'Open',
                onPress: () => onPressItem(n.story_url),
              }),
              React.createElement(Button, {
                title: isFav ? 'Remove from favorites' : 'Add to favorites',
                onPress: () => onPressFavorite(n.objectID),
              }),
            );
          }),
        );
      },
    };
  },
);

describe('HackerNewsScreen (simple)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the title and the list', () => {
    const { getByText, getByTestId } = render(<HackerNewsScreen />);

    expect(getByText('Hacker News')).toBeTruthy();
    expect(getByTestId('hn-list')).toBeTruthy();
  });

  it('filters deleted items: does NOT render objectID=2', () => {
    const { queryByTestId, getByTestId, getByText } = render(
      <HackerNewsScreen />,
    );

    expect(getByTestId('hn-item-1')).toBeTruthy();
    expect(getByText('First news')).toBeTruthy();

    expect(queryByTestId('hn-item-2')).toBeNull();
  });

  it('Favorites/Deleted/Settings buttons call their handlers', () => {
    const { getByText } = render(<HackerNewsScreen />);

    fireEvent.press(getByText('Favorites'));
    expect(mockGoToFavorites).toHaveBeenCalledTimes(1);

    fireEvent.press(getByText('Deleted'));
    expect(mockGoToDeleted).toHaveBeenCalledTimes(1);

    fireEvent.press(getByText('Settings'));
    expect(mockGoToSettings).toHaveBeenCalledTimes(1);
  });

  it('Open calls onPressItem with the visible item URL', () => {
    const { getAllByText } = render(<HackerNewsScreen />);

    fireEvent.press(getAllByText('Open')[0]);

    expect(mockOpenItem).toHaveBeenCalledTimes(1);
    expect(mockOpenItem).toHaveBeenCalledWith('https://example.com/1');
  });

  it('favorite button shows "Remove..." when already favorite and calls onPressFavorite', () => {
    const { getByText } = render(<HackerNewsScreen />);

    const btn = getByText('Remove from favorites');
    fireEvent.press(btn);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockToggleFavorite).toHaveBeenCalledWith('1');
  });
});
