function Cast({ credits }) {
  return (
    <>
      {credits && (
        <ul>
          {credits.map((credit) => (
            <li key={credit.id}>{credit.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Cast;
