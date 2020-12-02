import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import ItemsCarousel from 'react-items-carousel';
import { QueryResultBase } from 'react-query';
import styled from 'styled-components';

import MovieCardContainer from '../MovieCard/Container';
import { IMovie, NavigationButton } from './Model';

interface IProps extends Partial<QueryResultBase<IMovie[]>> {
  data: IMovie[];
}

const MovieList: React.FC<IProps> = ({
  status,
  isLoading,
  error,
  data,
  isFetchingMore,
  canFetchMore,
  fetchMore,
  refetch,
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const handleListEnd = () => {
    if (canFetchMore) {
      if (fetchMore) {
        // TODO: add a fallback
        fetchMore();
      }
    }
  };

  const renderFooter = () => {
    if (isFetchingMore) {
      // render a loader
      return null;
    }

    return <div style={{ height: 60 }} />;
  };

  if (isLoading) {
    // TODO: Content loader
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <Container className="movie_list">
      <div style={{ padding: 0, maxWidth: '100%', margin: '0' }}>
        <ItemsCarousel
          placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
          enablePlaceholder={isLoading}
          numberOfPlaceholderItems={5}
          infiniteLoop
          gutter={12}
          activePosition="center"
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={5}
          slidesToScroll={4}
          outsideChevron={false}
          showSlither={false}
          firstAndLastGutter
          activeItemIndex={activeItemIndex}
          requestToChangeActive={setActiveItemIndex}
          rightChevron={<NavigationButton icon={FaChevronRight} />}
          leftChevron={<NavigationButton icon={FaChevronLeft} />}
        >
          {isLoading
            ? []
            : data.map((movie) => {
                return <MovieCardContainer key={movie.id} {...{ movie }} />;
              })}
        </ItemsCarousel>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2em;
`;

export default MovieList;
