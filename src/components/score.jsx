const Score = (props) => {
  return ( 
    <p>
      {props.scores.map(score =>
        <p><strong>Score : </strong>{score.score} <br />
        <strong>Date: </strong>{score.date}</p>
        )}
    </p>
  );
}
export default Score;
			