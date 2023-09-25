import { header } from "../../assets"
function Landing() {
    return (
        <div>
            {/* Add row with LinkedIn button */}
            <div className="flex justify-end">

            </div>
            {/* Add row with LinkedIn button */}
            <div className="flex justify-center mt-24">
                <img src={header} alt="header" className="w-full m-4 select-none" draggable="false" />
            </div>

            <div className="flex justify-center mt-4">
                <span className="text-center text-xl mx-48">Experienced software engineer with a passion for innovation. Leading development at GrayMatter and developing scalable solutions at Apostle. Specializing in full-stack development with expertise in PHP and JavaScript. Strong problem-solving skills and effective team leadership.</span>
            </div>
        </div>
    )
}

export default Landing