import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeGroup>
          <Button>Subscribe</Button>
          <SubscriberLink>Already a subscriber?</SubscriberLink>
        </SubscribeGroup>
      </DesktopHeader>
    </header>
  );
};

const MobileHeader = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    margin-top: 32px;
    margin-bottom: 48px;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
`;

const SubscribeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 16px;
  justify-self: end;
`;

const SubscriberLink = styled.a`
  color: var(--color-gray-900);
  font-weight: 400;
  font-style: italic;
  font-size: 0.875rem;
  text-decoration: underline;
`;

export default Header;
