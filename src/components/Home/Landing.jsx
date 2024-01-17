import { header } from "../../assets"
import BulletinBtn from "../Layout/BulletinBtn"
import navigation_items from '../../utils/navigation_items'
function Landing() {
    return (
        <div>
            {/* Add row with LinkedIn button */}
            <div className="flex justify-center">
                <img src={header} alt="header" className="w-full pl-4 md:pl-20 md:mr-4 select-none" draggable="false" />
            </div>

            <div className="flex justify-center mt-4">
                <span className="text-center text-sm md:text-xl mx-4 md:mx-48">
                    I am 21 years old, currently residing in Schijndel, The Netherlands. I graduated from MBO Application and Media Developer level 4 in 2022. Currently, 
                    I am pursuing further studies at Fontys Hogeschool in Eindhoven. In addition to my academic pursuits, I have a job as a junior developer at Apostle in Geffen.
                </span>
            </div>

            <div className="flex justify-center mt-72 flex-col md:flex-row md:m-40">
                <BulletinBtn name={navigation_items[1].name} path={navigation_items[1].path}/>
            </div>
        </div>
    )
}

export default Landing
