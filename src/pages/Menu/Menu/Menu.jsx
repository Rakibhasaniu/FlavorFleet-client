import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>FlavorFleet | Menu</title>
            </Helmet>
            <Cover img={img} title="Our Menu"></Cover>
            
        </div>
    );
};

export default Menu;