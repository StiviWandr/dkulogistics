import React from "react";
import Footer from "./Components/Footer/Footer";
import AppToolbar from "./Components/UI/AppToolbar/AppToolbar";
import Routes from "./Routes/Routes";

function App() {
  return (
    <>
    <AppToolbar user={false}/>
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
