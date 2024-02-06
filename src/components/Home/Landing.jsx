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

            <div className="flex justify-center mt-20 flex-col md:flex-row md:m-36">
                <BulletinBtn name={navigation_items[1].name} path={navigation_items[1].path}/>
            </div>

            <div className="flex justify-center md:-mt-24 px-4 flex-col">
                <h1 className="text-2xl md:text-3xl">Experience in the field</h1>
                <div className="flex-col md:flex-row flex gap-x-4">
                    
                    <div className="flex flex-col px-4 gap-x-4 gap-y-2 mt-4 border rounded-xl p-4 md:w-2/6">
                        <div className="flex justify-between">
                            <h1 className="text-xl md:text-2xl">Fungible Development</h1>
                            <span className="text-lg md:text-xl mt-0.5">2022-2022</span>
                        </div>

                        <span className="text-base">
                            Fungible Development was a company that I started with a friend. We were both passionate about programming 
                            and wanted to start a company to develop software for clients.
                            This wasn't about web2 development. We made platforms and tools for clients and 
                            companies in the web3 space. We made Smart Contracts, DApps and other tools for the Ethereum blockchain.
                            After a few months, the bear market came and there were no more projects coming in. We decided to stop the
                            company and go our separate ways.
                        </span>
                    </div>

                    <div className="flex flex-col px-4 gap-x-4 gap-y-2 mt-4 border rounded-xl p-4 md:w-2/6">
                        <div className="flex justify-between">
                            <h1 className="text-2xl">Scherpenhuizen</h1>
                            <span className="text-xl mt-0.5">2022-2023</span>
                        </div>

                        <span className="text-base">
                            At Scherpenhuizen I was responsible for modernizing the company's way of working.
                            Before everything was done on paper and in Excel. I was busy with the digitalizing of the company.
                            I made some refreshments of outdated software and was made responsible for creating a
                            web based dashboard to controll the machines. These machines were used to sort and pack the products.
                            I had to work with really old code and working with those machines wasn't something I liked doing.
                            I also had to do everything on my own, it was a one man show. Which
                            I didn't like either, since I am still a junior and this is my time to learn. That's why I decided to leave.
                        </span>
                    </div>

                    <div className="flex flex-col px-4 gap-x-4 gap-y-2 mt-4 border rounded-xl p-4 md:w-2/6">
                        <div className="flex justify-between">
                            <h1 className="text-2xl">Apostle</h1>
                            <span className="text-xl mt-0.5">2023-Now</span>
                        </div>

                        <span className="text-base">
                            At Apostle I am responsible for maintaining and developing new features for the company's SAAS platform.
                            We are working in a team of 2 developers, it's a small team but we are doing great things.
                            I am learning a lot from my colleague and I am also teaching him a few things.
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Landing
