import React from "react";
import Footer from './Components/UI/Footer/Footer'
import AppToolbar from "./Components/UI/AppToolbar/AppToolbar";
import Routes from "./Routes/Routes";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state=>state.users.user)
  return (
    <>
    <AppToolbar user={user}/>
    <main>
      <Routes/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
    
  );
}

export default App;
