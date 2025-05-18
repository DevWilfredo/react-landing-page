import HeroComponent from "./HeroComponent";
import NavbarComponent from "./NavbarComponent";


const navbarItems = [
	{ link: '#', text: 'Home' },
	{ link: '#', text: 'About' },
	{ link: '#', text: 'Services' },
	{ link: '#', text: 'Contact' }
]

const cardSItems = [
	{
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
	},
	{
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
	},
	{
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
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

			<div className="row px-4 px-md-5 my-5">
				{
					cardSItems.map((card, index) => (
						<CardComponent key={index} card={card} />
					))
				}
			</div>
		</>
	);
};

export default Home;