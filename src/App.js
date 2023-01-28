import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import Tickets from "./components/Tickets";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import logo from "./Logo.svg";
import axios from "axios";



function App() {
  const [searhId, setSearchId] = useState();
  const [tickets, setTickets] = useState([]);
  const [stop, setStop] = useState(false);
  const [sortTickets, setSortTickets] = useState([]);

  // const dispatch = useDispatch()

  useEffect(() => {
    try {
      axios
        .get("https://aviasales-test-api.kata.academy/search")
        .then((res) => {
          const response = res.data;
          setSearchId(response.searchId);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  // console.log(searhId);




  useEffect(() => {
    if (searhId && stop === false) {
      async function subscribe() {
        let response = await fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searhId}`
        );
        // console.log(response);
        if (response.status === 502 || response.status === 500) {
          await subscribe();
        } else if (response.status === 404) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await subscribe();
        } else {
          let ticketsPart = await response.json();
          setTickets([...tickets, ...ticketsPart.tickets]);
          if (ticketsPart.stop) {
            setStop(true);
          }
        }
      }
      subscribe();
    }
    // console.log(tickets)
  }, [searhId, tickets, stop]);

  useEffect(() => {
    if (stop === true) {
      setSortTickets(tickets.slice(0, 4));
    }
  }, [stop, tickets]);




  return (
    <div className="App">
      <div className="app-wrapper">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="main">
          <Sidebar />
          <Navigation />
          <Tickets sortTickets={sortTickets}/>
        </main>
      </div>
    </div>
  );
}






export default  App;
