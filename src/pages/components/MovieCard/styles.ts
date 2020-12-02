import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .movie-card {
      &__overlay {
        display: flex;
      }
    }
  }

  .movie-card {
    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => {
        return transparentize(0.125, theme.colors.backgroundColor);
      }};
      z-index: 5;
      display: none;
      transition: 0.25s;
      padding: 1em;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    &__poster {
      height: 100%;
      width: 100%;

      img {
        height: 100%;
        width: 100%;
      }
    }
    &__title {
      color: #fff;
    }
    &__meta {
      color: #fff;
      line-height: 35px;
    }
    &__rating {
      display: flex;
      justify-content: center;

      p {
        margin: 0 0.25em;
        line-height: 14px;
      }
    }
  }
`;
