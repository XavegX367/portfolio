import { header } from "../../assets"
function Landing() {
    return (
        <div>
            {/* Add row with LinkedIn button */}
            <div className="flex justify-center">
                <img src={header} alt="header" className="w-full pl-4 md:pl-20 md:mr-4 select-none" draggable="false" />
            </div>

            <div className="flex justify-center mt-4">
                <span className="text-center text-sm md:text-xl mx-4 md:mx-48">I am 21 years old. I live in Schijndel in The Netherlands and have graduated from MBO 
                    Application End Media Developer level 4 since 2022. Currently I am studying at Fontys Hogeschool in Eindhoven. Besides school I 
                    have also got a job at Apostle in Oss as junior developer.
                </span>
            </div>
        </div>
    )
}

export default Landing