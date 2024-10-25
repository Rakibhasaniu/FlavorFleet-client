/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const FoodCard = ({item}) => {
    const {image,recipe,price,name,_id} = item;
    const navigate = useNavigate();
    const location = useLocation();

    const {user} =useAuth()
    console.log(user)
    const addToCart = (food) => {
        console.log(food,user)
        if(user && user?.email){
            const cartItem ={
                menuId:_id,
                email:user.email,
                name,
                image,
                price,
            }
            axios.post('http://localhost:5000/cart',cartItem)
            .then(res => {
                console.log(res.data)
            })
        } else 
        {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Log In to order",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
              });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <p className="absolute right-0 mt-10 mr-12 bg-slate-700 rounded-md">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button
                onClick={()=>addToCart(item)}
                 className="btn btn-outline border-0 border-b-4 border-orange-500 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;