import { useEffect, useState } from "react";

import yelp from "../api/yelp";

function useYelp() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const submitSearch = async (searchTerm) => {
    setLoading(true);
    try {
      let response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      setResults(response.data.businesses);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError("Something went Wrong");
      setLoading(false);
    }
  };
  useEffect(() => {
    submitSearch("pasta");
  }, []);

  return [{ results, error, loading }, submitSearch];
}
export default useYelp;
