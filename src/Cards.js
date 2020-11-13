import React from "react";
import SingleCard from "./SingleCard";
import Footer from "./Footer";

const Cards = ({ posts, spliceItem }) => {

  return (
    <section>
      <header className="header-style">
        <h1>Epower Blog</h1>
      </header>
      <div className=" parents-container">
        {posts.map((post) => {
          return <SingleCard key={posts.id} {...post}></SingleCard>;
        })}
      </div>
      <div className="btn-container">
        <button style={{ cursor: 'pointer' }} onClick={() => spliceItem(true)}>Previous</button>
        <button style={{ cursor: 'pointer' }} onClick={() => spliceItem(false)}>Next</button>
      </div>
      <Footer />
    </section>
  );
};
export default Cards;
