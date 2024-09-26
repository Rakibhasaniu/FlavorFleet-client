import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-10 my-20 bg-fixed">
            <SectionTitle
            heading="Check It Out"
            subHeading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-start bg-slate-500 bg-opacity-60 py-20 px-36 pt-12">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where Can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora saepe quibusdam, veritatis quae assumenda illo, aperiam quis dolores unde consectetur itaque! Deserunt sint, libero enim doloribus dicta iste vitae nobis, saepe error velit odio eos omnis tempore, voluptatum recusandae?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default Featured;