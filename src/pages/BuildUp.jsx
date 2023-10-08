import { conference_awwwards, joshuas_world, codigital, imarketina } from '../assets'
import websites from '../components/Buildup/websites.json'
import SiteInspiration from '../components/Buildup/SiteInspiration'


function BuildUp() {
    return (
        <div className='mx-4 mt-5 text-lg'>
            {/* <h2>This portfolio was made by Joris Korsten, a student at Fontys University of Applied Sciences, studying HBO ICT Media and Design in the second semester.</h2> */}

            <div className='flex justify-center mt-7 flex-col'>
                <h1 className='text-2xl text-center'>Designing the portfolio</h1>
                <span className='text-center'>
                    I started gathering inspiration from various websites. As a tip, we were advised to take a look 
                    at <a href='https://www.awwwards.com/' target='blank' className='url'>Awwwards</a>. Here, 
                    I came across some cool designs that I used as inspiration for my portfolio, which I have highlighted below.
                </span>

                <section className='flex flex-col justify-center mt-5 gap-y-5'>
                    <SiteInspiration id={websites[0].id} name={websites[0].name} url={websites[0].url} img={conference_awwwards} description={websites[0].description} />
                    <SiteInspiration id={websites[1].id} name={websites[1].name} url={websites[1].url} img={joshuas_world} description={websites[1].description} />
                    <SiteInspiration id={websites[2].id} name={websites[2].name} url={websites[2].url} img={codigital} description={websites[2].description} />
                    <SiteInspiration id={websites[3].id} name={websites[3].name} url={websites[3].url} img={imarketina} description={websites[3].description} />
                </section>
            </div>
        </div>
    )
}

export default BuildUp