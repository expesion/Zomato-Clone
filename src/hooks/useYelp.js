import { useEffect, useState } from "react";

import yelp from "../api/yelp";

function useYelp() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const submitSearch = async (searchTerm) => {
    try {
      let response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      setResults(response.data.businesses);
      setError(null);
    } catch (err) {
      setError("Something went Wrong");
    }
  };
  useEffect(() => {
    submitSearch("pasta");
  }, []);

  return [{ results, error }, submitSearch];
}
export default useYelp;
