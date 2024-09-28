import { useState } from 'react';
import img from '../../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div className='text-center'>
             <Helmet>
                <title>FlavorFleet | Order Food</title>
            </Helmet>
            {/* <h1>order</h1> */}
            <Cover img={img} title="OUR SHOP" ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            salad.map(food =>
                                <FoodCard
                                    key={food._id}
                                    item={food}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>


                        {
                            pizza.map(food =>
                                <FoodCard
                                    key={food._id}
                                    item={food}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>


                        {
                            soup.map(food =>
                                <FoodCard
                                    key={food._id}
                                    item={food}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>


                        {
                            dessert.map(food =>
                                <FoodCard
                                    key={food._id}
                                    item={food}
                                ></FoodCard>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>


                        {
                            drinks.map(food =>
                                <FoodCard
                                    key={food._id}
                                    item={food}
                                ></FoodCard>
                            )
                        }
                    </div>

                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Order;