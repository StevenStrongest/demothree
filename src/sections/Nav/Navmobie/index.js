import NavMobieWarpper from './navmobie.style';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import {List, ListItem} from 'reusecore/List';
import {GiEarthAmerica} from 'react-icons/gi';
import {BiHeadphone} from 'react-icons/bi';
import {TiMessages} from 'react-icons/ti';
import {FaFacebookF, FaTwitter} from 'react-icons/fa';
import {SiYoutube} from 'react-icons/si';
import { useState } from 'react';
import data from 'assets/data/nav';


const NavMobie = () =>{

    const [active, setActive] = useState(false);
    const toggleMenu = (e) =>{
        setActive(!active);
        e.stopPropagation();
    }

    return(
        <NavMobieWarpper>
             <Box className={active ? "overlay" : ""}>
            <Box className="nav-left">
                <List>
                    {data.navmobie.left.map((navleft, i) =>
                    <ListItem key={i}>
                         <Box className="icon">
                             {navleft.icon}
                         </Box>
                         <Box className="text">
                             <Text className="heading">{navleft.heading}</Text>
                             <Text>{navleft.content}</Text>
                         </Box>
                     </ListItem>
                    )}
                </List>
            </Box>
            <Box className={!active ? "nav-mobie active" : "nav-mobie"}>
                <input type="checkbox" className="menu-toggle" id="menu-toggle" checked={active ? "checked": ""}/>
                <label onClick={toggleMenu}></label>
                <Box className={active ? "background active" : "background"}>&nbsp;</Box>
                <List>
                   {data.navmobie.right.map((navright, i) =>
                        <ListItem key={i} className="menu-item">{navright.icon}</ListItem>
                   )}
                </List>
            </Box>
           </Box>
        </NavMobieWarpper>
    );
}

export default NavMobie;