import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ColumnButtons">
        <div className="card">
          <div className="button-col">
            <button
              className={`cursive-font`}
              onClick={() => {
                navigate("DifficultyPageforChess");
              }}
            >
              Play chess bot
            </button>
            {/* <button
              className={`cursive-font`}
              onClick={() => {
                navigate("/god-bot");
              }}
            >
              Play Leila
            </button> */}
            <button
              className={`cursive-font`}
              onClick={() => {
                navigate("/ThemePage");
              }}
            >
              Theme
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
