import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCart = () => {

    const axiosSecure = useAxios();
    const {data:cart=[]} = useQuery({
        queryKey:['cart'],
        queryFn: async () => {
            const response = await axiosSecure.get('/carts');
            return response.data;
        }
    })
    return [cart]
};

export default useCart;