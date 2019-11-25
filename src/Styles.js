import styled from 'styled-components';

// APPTITLE

export const AppTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

//SNAKE GAME

export const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 90vh;
`;

export const PlayButton = styled.button`
  border-radius: 10%;
  width: 100px;
  font-size: 25px;
  font-weight: bold;
`;

export const GameOverContainer = styled.div`
  width: 100vw;
  height: 95vh;
  background-color: black;
  color: white;
  font-size: 100px;
`;

export const GameOverTitle = styled.h1`
  color: white;
  font-size: 100px;
`;

export const PlayAgainButton = styled.button`
  background-color: white;
  font-size: 40px;
`;

// GRID
export const GridContainer = styled.div`
  flex: 1 0 30%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const GridStyle = styled.div`
  flex: 1 0 40%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Score = styled.h2`
  flex: 0 1 10%;
  font-size: 35px;
  padding: 0;
  margin: 0;
`;

// ROW

export const RowStyle = styled.div`
  flex: 1 1 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
