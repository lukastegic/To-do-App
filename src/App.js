import "./App.css";
import Main from "./components/Main";
import axios from "axios";
import { useState } from "react";

function App() {
  
  const [data, setData] = useState(0)
  // Make a request for a user with a given ID
  axios
    .get("https://gorest.co.in/public/v2/todos")
    .then(function (response) {
      // handle success
      console.log(response.data);
      setData(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return <Main data={data}/>;
}

export default App;
