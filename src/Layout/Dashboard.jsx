import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4" >
                    <li>
                        <NavLink className="text-black" to="/dashboard/userHome">
                            <FaHome />
                            UserHome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black" to="/dashboard/cart">
                            <FaShoppingCart />
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black" to="/dashboard/reservation">
                            <FaCalendar />
                           Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black" to="/dashboard/reservation">
                            <FaCalendar />
                           Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black" to="/dashboard/review">
                            <FaAd />
                           Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black" to="/dashboard/booking">
                            <FaList />
                           My Bookings
                        </NavLink>
                    </li>
                    <div className="divider divider-info"></div>
                    <li>
                        <NavLink className="text-black" to="/">
                            <FaHome />
                           Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black" to="/order/salad">
                            <FaSearch />
                           Menu
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;