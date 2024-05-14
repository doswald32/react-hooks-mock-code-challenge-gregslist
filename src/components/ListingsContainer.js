import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {

  function handleDelete(e) {
    console.log(e.target);
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return <ListingCard key={listing.id} description={listing.description} image={listing.image} location={listing.location} handleDelete={handleDelete}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
