import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import RockPaperScissorsItem from '../RockPaperScissorsItem'

import {
  BgContainer,
  ResultsContainer,
  OptionsContainer,
  Option,
  ScoreContainer,
  Score,
  ScoreNumber,
  GameViewContainer,
  GameOptionsList,
  GameResultsViewContainer,
  SelectedOptionsContainer,
  GameParticipantText,
  GameParticipantChoiceImage,
  GameUserOptionsContainer,
  ResultsText,
  PlayAgainButton,
  PopupContainer,
  TriggerButton,
  PopUpBody,
  PopUpImage,
  CloseButton,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.InProgress,
    userChoice: '',
    gameChoice: '',
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state

    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props

    return (
      <GameOptionsList>
        {choicesList.map(eachOption => (
          <RockPaperScissorsItem
            key={eachOption.id}
            optionsDetails={eachOption}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderGameWinView = () => {
    const {choicesList} = this.props
    const {userChoice, gameChoice} = this.state
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <GameResultsViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionsContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.image}
              alt="your choice"
            />
          </GameUserOptionsContainer>
          <GameUserOptionsContainer>
            <GameParticipantText>Others</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.image}
              alt="opponent choice"
            />
          </GameUserOptionsContainer>
        </SelectedOptionsContainer>
        <ResultsText>YOU WIN </ResultsText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultsViewContainer>
    )
  }

  renderGameLostView = () => {
    const {choicesList} = this.props
    const {userChoice, gameChoice} = this.state
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <GameResultsViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionsContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.image}
              alt="your Choice"
            />
          </GameUserOptionsContainer>
          <GameUserOptionsContainer>
            <GameParticipantText>Others</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.image}
              alt="opponent choice"
            />
          </GameUserOptionsContainer>
        </SelectedOptionsContainer>
        <ResultsText>YOU LOSE</ResultsText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultsViewContainer>
    )
  }

  renderGameDrawView = () => {
    const {choicesList} = this.props
    const {userChoice, gameChoice} = this.state
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <GameResultsViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionsContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.image}
              alt="your Choice"
            />
          </GameUserOptionsContainer>
          <GameUserOptionsContainer>
            <GameParticipantText>Others</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.image}
              alt="opponent choice"
            />
          </GameUserOptionsContainer>
        </SelectedOptionsContainer>
        <ResultsText>IT IS DRAW</ResultsText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultsViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWinView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <BgContainer>
        <ResultsContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br /> <br /> PAPER <br /> <br /> SCISSORS
            </Option>
          </OptionsContainer>
          <ScoreContainer>
            <Score>Score</Score>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </ResultsContainer>
        <GameViewContainer>
          {this.renderGameView()}
          <PopupContainer>
            <Popup
              modal
              trigger={<TriggerButton type="button">Rules</TriggerButton>}
              closeOnEscape
              window
            >
              {close => (
                <PopUpBody>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                  <CloseButton type="button" onClick={() => close()}>
                    {RiCloseLine}
                  </CloseButton>
                </PopUpBody>
              )}
            </Popup>
          </PopupContainer>
        </GameViewContainer>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
