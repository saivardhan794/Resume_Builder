import styled from 'styled-components';

export const FormCompleteDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 98%;
  border-radius: 1rem;
  padding: 2rem;
  padding-top: 0.5rem;
  gap: 1rem;
`;

export const FormComplete = styled.form`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

export const FormTopHeding = styled.h2`
  margin: 0;
  font-weight: bolder;
  width: 100%;
`;

export const FormInfoInput = styled.input`
  background-color: hsl(0 0% 93%);
  height: 2rem;
  width: 10rem;
  flex-grow: 1;
  border: none;
`;

export const FormBtn = styled.button`
  background-color: ${(props) => props.BgColor};
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;
  color: ${(props) => props.Color};
  font-size: 0.875rem;
  padding: 0 0.725rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
`;

export const FormSubHeading = styled.h3`
  font-weight: bold;
  width: 100%;
`;

export const FormLabel = styled.label``;

export const FormInfoTextArea = styled.textarea`
  background-color: hsl(0 0% 93%);
  height: 4rem;
  width: 15rem;
  flex-grow: 1;
  border: none;
`;
