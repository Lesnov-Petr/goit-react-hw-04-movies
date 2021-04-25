const Overview = ({ review }) => {
  return (
    <div>
      <h3>{review.author_details.name}</h3>
      <p>{review.content}</p>
    </div>
  );
};

export default Overview;
