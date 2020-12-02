import { camelizeKeys } from 'humps';
import flatMap from 'lodash/flatMap';
import React from 'react';
import { useInfiniteQuery } from 'react-query';

import MovieList from '.';
import { fetchMovies } from './Model';

const MovieListContainer: React.FC = () => {
  const {
    status,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    data,
    error,
    refetch,
    isLoading,
  } = useInfiniteQuery(['movies'], fetchMovies, {
    cacheTime: 0,
    getFetchMore: (lastGroup) => {
      return lastGroup.page + 1;
    },
  });

  const concatenatedGroup = flatMap(data, (group) => {
    return camelizeKeys(group.results);
  });

  return (
    <MovieList
      data={concatenatedGroup}
      {...{
        isFetchingMore,
        status,
        fetchMore,
        canFetchMore,
        error,
        refetch,
        isLoading,
      }}
    />
  );
};

export default MovieListContainer;
