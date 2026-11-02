import { ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";
//DATA OUTSIDE COMPONENT TO AVOID RECREATION ON EACH RENDER

const SPY_OFFSET = -75; // Offset for spy scrolling to activate the link
const SCROLL_OFFSET = -70; // Offset for scrolling to sections, adjust as needed for fixed headers or spacing

const NavigationLink = ScrollLink("a", { // Use the "a" tag for links
    ...scroller, // Copy the scroller methods to the link component
    scrollTo(to, options) {
        scroller.scrollTo(to, { ...options, offset: SCROLL_OFFSET });
    },
});

export default function AppNavigationLinks({ to, smooth, hashSpy, duration, activeClass, className = "", onClick, onSetActive, children }) {



    return (
        <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <NavigationLink to={to} smooth={smooth} spy hashSpy={hashSpy} duration={duration} offset={SPY_OFFSET} activeClass={activeClass} className={className} onClick={onClick} onSetActive={onSetActive}>

                {children}

            </NavigationLink>
        </motion.span>
    )
}