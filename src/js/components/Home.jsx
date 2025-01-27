import { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//create your first component
const Home = () => {
	const [timer, setTimer] = useState(0)
	useEffect(() => {
	const interval = setInterval(() => {setTimer(timer => timer + 1)},1000);	
	return () => clearInterval(interval)
},[])
	return (
		<div className="home_container">
			<div className="home_row">
				<SecondsCounter number= {Math.floor(timer / 10000)%10} />
				<SecondsCounter number= {Math.floor(timer / 10000)%10} />
				<SecondsCounter number= {Math.floor(timer / 1000)%10} />
				<SecondsCounter number= {Math.floor(timer / 100)%10} />
				<SecondsCounter number= {Math.floor(timer / 10)%10} />
				<SecondsCounter number= {timer%10} />
			</div>
		</div>
	);
};

export default Home;