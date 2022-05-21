import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
 
const Search = () => {
let query = useQuery();
  return (
    <div>Searching : {query.get("q")} </div>
  )
}

export default Search