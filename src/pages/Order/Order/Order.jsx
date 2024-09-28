import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import img from '../../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover/Cover';
import { useState } from 'react';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            {/* <h1>order</h1> */}
            <Cover img={img} title="OUR SHOP" ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;