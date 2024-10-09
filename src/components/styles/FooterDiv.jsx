import styled from 'styled-components';

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  width: 100%;
  max-height: 40px;
  background-color: #333333;
  padding: 0.5rem;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: end;
`;

export const FooterText = styled.span`
  padding-right: ${(props) => props.PaddingRight};
  padding-left: ${(props) => props.PaddingLeft};
  color: white;
  margin-right: ${(props) => props.MarginRight};
  font-weight: 500;
`;
