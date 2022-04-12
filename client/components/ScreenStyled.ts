import styled from 'styled-components';

const SmallScreenMin = styled.div`
  @media (max-width: 574px) {
    display: block;
  }

  display: none;
`;

const ScreenMinSmall = styled.div`
  @media (min-width: 575px) {
    display: contents;
  }

  display: none;
`;

const SmallScreenMax = styled.div`
  @media (min-width: 575px) and (max-width: 1019px) {
    display: block;
  }

  display: none;
`;

const SmallScreen = styled.div`
  @media (max-width: 1019px) {
    display: block;
  }

  display: none;
`;

const LargeScreen = styled.div`
  display: none;

  @media (min-width: 1020px) {
    display: block;
  }
`;

export {
  SmallScreen,
  LargeScreen,
  SmallScreenMin,
  ScreenMinSmall,
  SmallScreenMax,
};
