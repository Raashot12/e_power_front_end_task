import React from 'react'
import {Link} from "react-router-dom"
const SingleCard = ({id, featured_image, excerpt, title}) => {


	//Single Card design page  with props passed to display to UI
	return (
    <>
      <div>
        <img
          src={featured_image}
          alt="itc-acedemy "
          width="350px"
          height="200px"
        />
        <p className="title-rendered">{title.rendered}</p>
        <p
          contentEditable="true"
          dangerouslySetInnerHTML={{
            __html: excerpt.rendered,
          }}
          className="details-of-card"
        ></p>
        <Link to={`/details/${id}`}>
          <button className="read-more-btn">Click here to read more</button>
        </Link>
      </div>
    </>
  );
}
export  default SingleCard;
