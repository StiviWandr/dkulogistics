import React, { useEffect } from "react";
import Footer from './Components/UI/Footer/Footer'
import AppToolbar from "./Components/UI/AppToolbar/AppToolbar";
import Routes from "./Routes/Routes";
import { useSelector } from "react-redux";
import { checkAuth } from "./Store/userSlice";

function App() {
	const state = useSelector(state=>state)
	console.log(state);
  	const user = useSelector(state=>state.users.user)
  	useEffect(()=>{
		if(localStorage.getItem('token')){
			checkAuth()
		}
    	
  	},[])
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
