import React from 'react';
import styled from 'styled-components';

import { navbarLinks } from './Model';

const Navbar: React.FC = () => {
  return (
    <Container className="navbar">
      <div className="navbar__logo-wrapper">
        <h1 className="navbar__logo-text">flix</h1>
      </div>
      <div className="navbar__list">
        <ul>
          {navbarLinks.map(({ target, label, id }) => {
            return (
              <li key={id}>
                <a href={target}>
                  <p>{label}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1em;
  display: flex;

  .navbar {
    &__logo-wrapper {
      margin-right: 10em;
    }
    &__logo-text {
      font-weight: bold;
      font-size: 24;
      color: ${({ theme }) => {
        return theme.colors.brandPrimary;
      }};
      text-transform: uppercase;
    }
    &__list {
      flex: 1;
      align-items: center;
      display: flex;
      ul {
        flex: 1;
        height: 100%;
        list-style: none;
        display: flex;

        li {
          margin: 0 1em;
          display: flex;
          align-items: center;
          a {
            height: 100%;
            color: #fff;
            text-decoration: none;
            display: flex;
            align-items: center;
            p {
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0.25px;
            }
          }
        }
      }
    }
  }
`;

export default Navbar;
