import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName}) {
  // two-way binding on player
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    // bestPractice - react works with current value only in function form
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleInputChange}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
