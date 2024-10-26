import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
    const {user} = useAuth();
    // console.log(user.email)
    const axiosSecure = useAxios();
    const {refetch,data:cart=[]} = useQuery({
        queryKey:['cart',user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user?.email}`);
            return response.data;
        }
    })
    return [cart,refetch]
};

export default useCart;