import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle
                subHeading="What Our Client Say"
                heading="TESTIMONIALS"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>

                {
                    reviews.map((review) =>
                        <SwiperSlide
                            key={review._id}>
                            <div className='my-16 mx-24  flex flex-col items-center'>
                                <Rating
                                    style={{maxWidth:180}}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='py-8'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>

                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;