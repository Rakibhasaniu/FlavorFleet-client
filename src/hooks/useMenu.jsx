import { useEffect, useState } from "react";

const useMenu = () => {

    const [popularMenu, setPopularMenu] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                
                setPopularMenu(data)
                setLoading(false)
            })
    }, [])
    return [popularMenu,loading]
};

export default useMenu;