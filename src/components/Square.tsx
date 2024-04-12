type Player = "X" | "O" | "BOTH" | null;

function Square({
  value,
  onClick,
  winner,
}: {
  value: Player;
  winner: Player;
  onClick: () => void;
}) {
  if (!value) {
    return (
      <button className="sqaure" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
}

export default Square;