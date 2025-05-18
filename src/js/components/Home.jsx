import HeroComponent from "./HeroComponent";
import NavbarComponent from "./NavbarComponent";
import AccordionComponent from "./AccordionComponent";
import FooterComponent from "./FooterComponent";
import CardsComponent from "./CardsComponent";

//data
import { accordionItems, accordionItems2, cardSItems, navbarItems } from '../data'

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

				<div className="row mt-5">
					{
						cardSItems.map((card, index) => (
							<CardsComponent key={index} card={card} />
						))
					}
				</div>

				<div className="row mt-5">
					<div className="col-md-6 mb-5">
						<AccordionComponent items={accordionItems} index={1} />
					</div>

					<div className="col-md-6 mb-5">
						<AccordionComponent items={accordionItems2} index={2} />
					</div>

				</div>
			</div>
			<FooterComponent />
		</>

	);
};

export default Home;