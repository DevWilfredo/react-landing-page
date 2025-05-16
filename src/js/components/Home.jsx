import HeroComponent from "./HeroComponent";
import NavbarComponent from "./NavbarComponent";


const navbarItems = [
	{ link: '#', text: 'Home' },
	{ link: '#', text: 'About' },
	{ link: '#', text: 'Services' },
	{ link: '#', text: 'Contact' }
]

//create your first component
const Home = () => {
	return (
		<>
			<NavbarComponent items={navbarItems} brandText='Start Boostrap' />
			<div className="px-4 px-md-5 my-5">
				<HeroComponent
					title='A Warm Welcome!'
					textBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi tenetur labore, placeat quae dolore, ea temporibus est incidunt repudiandae minus delectus laudantium repellat dolor dolores sit atque consequatur in?"
					buttonText='Call to Action'
				/>
			</div>
		</>
	);
};

export default Home;