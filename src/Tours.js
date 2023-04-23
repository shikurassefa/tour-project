import Tour from "./Tour";
const Tours = ({ tour, handleInterst }) => {
  return (
    <>
      <div className="title">
        <h2>our Tours</h2>
        <div className="underline"></div>
      </div>

      {tour.map((tour) => {
        return <Tour tour = {tour} handleInterst={handleInterst} />;
      })}
    </>
  );
};
export default Tours;
