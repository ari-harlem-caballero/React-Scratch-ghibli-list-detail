import Character from './Character';

export default function CharactersList({ characters }) {
  return (
    <>
      <h4>Characters:</h4>
      <div className="character-name">
        {
          characters.map((character, i) =>
            <Character key={character.name + i}
              character={character} />
          )}
      </div>
    </>
  );
}
