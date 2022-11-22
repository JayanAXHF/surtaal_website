import {motion} from "framer-motion"


const Teacher = (props) => {

    return (
            <motion.div whileHover={{scale: 1.05}}
                        className="max-w-sm bg-white border mr-4 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
            />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.name}
                </h5>
            </a>
            <hr/>
            <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
                <br/>

                <h2 className="text-lg font-medium dark:text-white"> Qualifications:</h2>
    <br/>
                <ul>
                    <li>
                        {props.firstQuality}
                    </li>
                    <li>
                        {props.secondQuality}
                    </li>

                </ul>

            </p>
        </div>
    </motion.div>)

}

export default Teacher