import Axios from 'axios';
import { decamelizeKeys } from 'humps';
import queryStringify from 'qs-stringify';
import React from 'react';

import config from '../../../config';
import { isOK } from '../../../utils/requests';

export const fetchMovies: (
  key: string,
  page: number,
) => Promise<{ results: IMovie[]; page: number }> = async (key, page = 1) => {
  const { API_URL, API_KEY } = config;
  const params = decamelizeKeys({
    apiKey: API_KEY,
    sortBy: 'popularity.desc',
    page,
  });
  const url = `${API_URL}/discover/movie/?${queryStringify(params)}`;

  console.log('url: ', url);

  const res = await Axios.get(url);
  if (isOK(res.status)) {
    return res.data;
  }
  console.log(e.response);
  return null;
};

export enum ViewTypes {
  MOVIE_CARD = 'MOVIE_CARD',
}

export interface IMovie {
  backdropPath: string;
  id: number;
  originalTitle: string;
  popularity: 2007.928;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
}

export const NavigationButton: React.FC<{ icon: IconType }> = ({
  icon: Icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: 50,
        width: '35px',
        height: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon />
    </div>
  );
};
