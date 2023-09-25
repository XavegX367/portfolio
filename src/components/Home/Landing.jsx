import { header } from "../../assets"
import Btn from "../Layout/Btn"
function Landing() {
    return (
        <div>
            {/* Add row with LinkedIn button */}
            <div className="flex justify-end mt-5 mr-10">
                <Btn content={"LinkedIn"} />
            </div>
            {/* Add row with LinkedIn button */}
            <div className="flex justify-center">
                <img src={header} alt="header" className="w-full pl-20 mr-4 select-none" draggable="false" />
            </div>

            <div className="flex justify-center mt-4">
                <span className="text-center text-xl mx-48">Experienced software engineer with a passion for innovation. Leading development at GrayMatter and developing scalable solutions at Apostle. Specializing in full-stack development with expertise in PHP and JavaScript. Strong problem-solving skills and effective team leadership.</span>
            </div>
        </div>
    )
}

export default Landing