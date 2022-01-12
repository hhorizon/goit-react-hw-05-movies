function Reviews({ reviews }) {
  return (
    <>
      {reviews.length === 0 ? (
        <div>Ничего нет</div>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      )}
      {/* Дописать, если пустой масив */}
    </>
  );
}

export default Reviews;
