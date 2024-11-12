const Card = ({ name, flag }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "10px",
        width: "200px",
        height: "200px",
      }}
    >
      <img
        src={flag}
        alt={`Flag of ${name}`}
        style={{ height: "100px", width: "100px" }}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
