import React, { useState, useEffect } from "react";
import axios from "axios";
import Unsplash, { toJson } from "unsplash-js";

const TestingComponent = () => {
  const unsplash = new Unsplash({
    accessKey: "SkcKMOTBL9jchiPGye03WEAsrnd0SdU7K9OBk9w6zjs",
  });

  const [searchState, setSearchState] = useState("cat");

  useEffect(() => {
    async function fetchData() {
      try {
        unsplash.search
          .photos(searchState)
          .then(toJson)
          .then((json) => {
            console.log(json);
          });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <button type="submit" className="btn-primary">
        Search
      </button>
    </div>
  );
};

export default TestingComponent;
