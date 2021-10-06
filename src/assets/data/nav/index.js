import {BiStreetView} from 'react-icons/bi';
import {FaGamepad, FaPaperPlane} from 'react-icons/fa';
import {MdTimeline} from 'react-icons/md';
import {RiTeamFill} from 'react-icons/ri';
import {IoLogoBuffer} from 'react-icons/io';

export default {
    nav:[
        {
            content: "Overview",
            link: "#overview"
        },
        {
            content: "Gameplay",
            link: "#gameplay"
        },
        {
            content: "Roadmap",
            link: "#roadmap"
        },
        {
            content: "Team",
            link: "#team"
        },
        {
            content: "Papers",
            link: "#papers"
        },
    ],

    navmobie:

        {
            right:[
                {
                    icon: <BiStreetView/>,
                },
                {
                    icon: <FaGamepad/>,
                },
                {
                    icon: <MdTimeline/>,
                },
                {
                    icon: <RiTeamFill/>,
                },
                {
                    icon: <FaPaperPlane/>,
                },
                {
                    icon: <IoLogoBuffer/>,
                },
            ],
            left:[
                {
                    icon: <BiStreetView/>,
                    heading: "Overview",
                    content: "View ours product"
                },
                {
                    icon: <FaGamepad/>,
                    heading: "Gameplay",
                    content: "Ultimate gaming experience"
                },
                {
                    icon: <MdTimeline/>,
                    heading: "Roadmap",
                    content: "Our journey"
                },
                {
                    icon: <RiTeamFill/>,
                    heading: "Team",
                    content: "Ours Team"
                },
                {
                    icon: <FaPaperPlane/>,
                    heading: "Papers",
                    content: "Seen our papers"
                },
                {
                    icon: <IoLogoBuffer/>,
                    heading: "Backed",
                    content: "Ours Backed"
                }
            ]
        }
}