import React from 'react';
import styled from 'styled-components';
import { IoIosFlash } from 'react-icons/io';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 145px;
`;

const Span = styled.span`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  text-align: center;
`;

const HomePageInfoSectionOne = (props): JSX.Element => {
  return (
    <Div>
      <IoIosFlash size="3em" />
      <Span>Vos trajets préférés à petits prix</Span>
      <Span fontSize="14px" fontWeight="500" width="300px">
        Où que vous alliez, en bus ou en covoiturage, trouvez le trajet idéal
        parmi notre large choix de destinations à petits prix.
      </Span>
    </Div>
  );
};

export default HomePageInfoSectionOne;
