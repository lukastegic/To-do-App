import "./App.css";
import Main from "./components/Main";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  
  const [data, setData] = useState([])
  // Make a request for a user with a given ID
  useEffect(()=>{
    axios
    .get("https://gorest.co.in/public/v2/todos")
    .then(function (response) {
      // handle success
      console.log("data");
      setData(response.data)
    })
    .catch(function (error) {
      // handle error
    })
    .then(function () {
      // always executed
    });
  },[])
  
  return <Main data={data}/>;
}

export default App;