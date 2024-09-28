import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [popularMenu, setPopularMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setPopularMenu(popularItems)
            })
    }, [])

    return (

        <section className='mb-12'>
            <SectionTitle heading="From Our Menu" subHeading="Popular Items"></SectionTitle>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popularMenu.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='grid place-items-center mt-4'>
                <button className='btn btn-outline border-0 border-b-4 flex justify-center'>View Full Menu</button>
            </div>

        </section>


    );
};

export default PopularMenu;