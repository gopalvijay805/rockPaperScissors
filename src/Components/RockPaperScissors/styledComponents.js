import styled from 'styled-components/macro'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
`
export const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 9px;
  margin-top: 50px;
  width: 60%;
  padding: 8px;
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Option = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #223a5f;
  font-weight: bold;
`
export const ScoreNumber = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #223a5f;
  font-weight: bold;
`
export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60vh;
`
export const GameOptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 500px;
`
export const GameResultsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 500px;
`

export const GameUserOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SelectedOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 550px;
`
export const GameParticipantText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`

export const GameParticipantChoiceImage = styled.img`
  height: 150px;
  width: 150px;
`
export const ResultsText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`

export const PlayAgainButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #223a5f;
  padding: 13px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  background-color: #ffffff;
  align-self: center;
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TriggerButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #223a5f;
  padding: 13px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  background-color: #ffffff;
  align-self: center;
`
export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`
export const PopUpImage = styled.img`
  width: 80%;
  align-self: center;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`
