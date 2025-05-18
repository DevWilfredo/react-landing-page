import HeroComponent from "./HeroComponent";
import NavbarComponent from "./NavbarComponent";
import AccordionComponent from "./AccordionComponent";
import FooterComponent from "./FooterComponent";



const navbarItems = [
	{ link: '#', text: 'Home' },
	{ link: '#', text: 'About' },
	{ link: '#', text: 'Services' },
	{ link: '#', text: 'Contact' }
]

const accordionItems = [
	{title: 'First Item', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
	{title: 'Second Item', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
	{title: 'Third Item', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
	{title: 'Fourth Item', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
]

const accordionItems2 = [
	{title: 'Another item', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
	{title: 'and another..', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
	{title: 'another one...', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
	{title: 'yess, the last', content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '},
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
				<div class="row mt-5">
					<div class="col-md-6">
				<AccordionComponent items = {accordionItems} index={1}/>
				</div>

				<div class="col-md-6">
				<AccordionComponent items = {accordionItems2} index={2}/>
				</div>

				</div>				
			</div>			
			<FooterComponent/>
		</>
		
	);
};

export default Home;