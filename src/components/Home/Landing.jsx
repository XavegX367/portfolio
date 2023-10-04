import { header } from "../../assets"
function Landing() {
    return (
        <div>
            {/* Add row with LinkedIn button */}
            <div className="flex justify-center">
                <img src={header} alt="header" className="w-full pl-4 md:pl-20 md:mr-4 select-none" draggable="false" />
            </div>

            <div className="flex justify-center mt-4">
                <span className="text-center text-sm md:text-xl mx-4 md:mx-48">
                    I'm 21 years old and living in Schijndel, The Netherlands. I graduated from MBO Application and Media Developer level 4 in 2022. 
                    Right now, I'm studying at Fontys Hogeschool in Eindhoven. Besides my studies, I'm also working as a junior developer at Apostle in Oss.
                </span>
            </div>
        </div>
    )
}

export default Landing
