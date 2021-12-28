import {motion} from "framer-motion";

const MotionHoc = (props) => {
    return (
        <motion.div
            initial={{y: 500}}
            animate={{
                y: 0,
                transition: {duration: 0.5, type: "spring"},
            }}
            exit={{
                y: -500,
                transition: {duration: 0.5, type: "spring", ease: "easeInOut"},
            }}
        >
            {props.children}
        </motion.div>
    );
}


export default MotionHoc;
