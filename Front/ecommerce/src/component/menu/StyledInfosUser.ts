import styled from 'styled-components';

export const ContentAccount = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  bottom: 0;
  height: 16vh;
  background: #FAFAFA;
  width: 100vw;
  padding: 0 8%;

  @media (min-width: 800px) {
    width: 41.82vw;
    height: 12vh;
    padding: 0 4%;
  }

  @media (min-width: 1070px) {
    width: 29.82vw;
    padding: 0 0 0 2%;
  }
`
export const ContentAccountLink = styled.a`
  color: #126C80;
  text-decoration: none;

    &:hover {
      color: #228AAB;
    }

  &:first-child {
    margin: 7% 0 2% 0;
  }
`