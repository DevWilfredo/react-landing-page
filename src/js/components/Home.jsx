import HeroComponent from "./HeroComponent";
import NavbarComponent from "./NavbarComponent";

//create your first component
const Home = () => {
	return (
		<>
			<NavbarComponent />
			<div className="mx-5 px-4 px-md-5 my-5">
				<HeroComponent />
			</div>
		</>
	);
};

export default Home;