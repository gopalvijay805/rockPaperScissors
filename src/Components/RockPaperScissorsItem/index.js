import {OptionListItem, GameOptionButton, OptionImage} from './styledComponents'

const RockPaperScissorsItem = props => {
  const {optionsDetails, onClickSetUserChoice} = props
  const {image, id} = optionsDetails

  const userChoice = () => {
    onClickSetUserChoice(id)
  }
  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        onClick={userChoice}
        data-textid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={image} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default RockPaperScissorsItem
