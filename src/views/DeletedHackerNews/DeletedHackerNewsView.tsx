import { View, Text } from 'react-native';
import React from 'react';
import { DeletedHackerNewsViewProps } from './types';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import Title from '../components/Title/Title';
import NoData from '../components/NoData/NoData';
import DeletedHackerNewsScrollViewList from './components/DeletedHackerNewsScrollViewList/DeletedHackerNewsScrollViewList';

const DeletedHackerNewsView: React.FC<DeletedHackerNewsViewProps> = props => {
  const { deletedHackerNews } = props;
  return (
    <ScreenContainer>
      <Title description="Deleted" />
      {deletedHackerNews.length > 0 ? (
        <DeletedHackerNewsScrollViewList {...props} />
      ) : (
        <NoData />
      )}
    </ScreenContainer>
  );
};

export default DeletedHackerNewsView;
