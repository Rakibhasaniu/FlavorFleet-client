import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/salad-bg.jpg'
import img5 from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>FlavorFleet | Menu</title>
            </Helmet>
            <Cover img={img} title="Our Menu"></Cover>
            <SectionTitle heading="Don't miss" subHeading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" coverImg={img2} ></MenuCategory>
            <MenuCategory items={pizza} title="pizza" coverImg={img3} ></MenuCategory>
            <MenuCategory items={salad} title="salad" coverImg={img4} ></MenuCategory>
            <MenuCategory items={soup} title="soup" coverImg={img5} ></MenuCategory>
            
        </div>
    );
};

export default Menu;