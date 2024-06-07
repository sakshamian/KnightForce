import ColumnButtons from "../components/ColumnButtons";

import { useNavigate } from "react-router-dom";

function BotPage() {
  const navigate = useNavigate();
  return (
    <ColumnButtons
      isFirstButton={true}
      isSecondButton={true}
      firstButtonHandler={() => {
        navigate("DifficultyPageforTicTacToe");
      }}
      thirdButtonHandler={true}
      fouthButtonHandler={false}
      fifthButtonHandler={false}
      firstButtonContent={"TIC TAC TOE"}
      secondButtonContent={"CHESSBOT"}
      thirdButtonContent={"jpg"}
      fourthButtonContent={"jkfdf"}
      fifthButtonContent={"gdsuh"}
      fontFamilyValue={`orbitron-font`}
    />
  );
}
export default BotPage;
