import styled from 'styled-components';

const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  background-color: ${(props) =>
    props.color ? 'transparent' : props.theme.color[props.color]};
  border: 1px solid ${(props) => props.theme.color[props.color]};
  height: 39px;
  border-radius: 5px;
  padding: 0 20px 0 20px;
  margin: 0 5px;
  transition: all 0.5s;
  opacity: 0.8;
  color: ${(props) => (props.color ? props.theme.color[props.color] : '#fff')};
  ${(props) => props.width && 'width: 100%'};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    opacity: 1;
    background-color: ${(props) => props.theme.color[props.color]};

    a {
      color: ${(props) =>
        props.color ? '#fff' : props.theme.color[props.color]};
    }
  }
`;

const ButtonColored = styled(Button)`
  background: ${(props) =>
    props.color ? props.theme.color[props.color] : '#fff'};
  color: #fff;
`;

export { Button, ButtonColored };
