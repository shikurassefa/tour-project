import React, { useState } from "react";
const Tour = ({ tour, handleInterst }) => {
  const { id, name, image, price, info } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className="tour">
        <img src={image} />
        <div className="tour-info">
          <h4>{name}</h4>
          <p>
            {price} <span>birr</span>
          </p>
        </div>
        <p className="info">
        {`${readMore ? `${info}`:`${info.substring(0,200)}`}`}
        <button className="btn fetch" onClick={()=>setReadMore(!readMore
        )

        }>{`${readMore ? 'less more':'read more'}`}</button>
        </p>
        <button className="btn " onClick={() => handleInterst(id)}>
          not intersted
        </button>
      </article>
    </>
  );
};
export default Tour;
