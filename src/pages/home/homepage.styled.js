import styled from 'styled-components';
import image1 from '../../img/bg1.jpg';

export const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 80px);
  width: calc(100vw - 80px);
  transition: background-image 1500ms linear;
`;

export const Title = styled.h1`
  margin-top: auto;
  margin-bottom: auto;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 1.22;
  text-align: center;
  letter-spacing: 0.545em;
  text-transform: uppercase;
`;
