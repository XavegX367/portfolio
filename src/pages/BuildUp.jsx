import { conference_awwwards, joshuas_world, codigital, imarketina, typography } from '../assets'
import inspirations from '../utils/inspirations'
import SiteInspiration from '../components/Buildup/SiteInspiration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function BuildUp() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/projects/1')
    }

    return (
        <div className='mx-4 mt-5 text-lg'>
            <div className='flex flex-row justify-start gap-x-4'>
                <button className='cursor-pointer md:mt-2' onClick={() => goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} className='text-4xl' />
                </button>
                <span className='text-4xl md:mt-2'>Designing the portfolio</span>
            </div>
            {/* <h2>This portfolio was made by Joris Korsten, a student at Fontys University of Applied Sciences, studying HBO ICT Media and Design in the second semester.</h2> */}

            <div className='flex justify-start mt-7 flex-col mb-10'>
                <h1 className='text-2xl'>Inspiration</h1>
                <span className='md:w-2/5 mt-2'>
                    I started gathering inspiration from various websites. As a tip, we were advised to take a look 
                    at <a href='https://www.awwwards.com/' target='blank' className='url'>Awwwards</a>. Here, 
                    I came across some cool designs that I used as inspiration for my portfolio, which I have highlighted below.
                </span>

                <section className='flex flex-col justify-center mt-5 gap-y-5'>
                    <SiteInspiration id={inspirations[0].id} name={inspirations[0].name} url={inspirations[0].url} img={conference_awwwards} description={inspirations[0].description} />
                    <SiteInspiration id={inspirations[1].id} name={inspirations[1].name} url={inspirations[1].url} img={joshuas_world} description={inspirations[1].description} />
                    <SiteInspiration id={inspirations[2].id} name={inspirations[2].name} url={inspirations[2].url} img={codigital} description={inspirations[2].description} />
                    <SiteInspiration id={inspirations[3].id} name={inspirations[3].name} url={inspirations[3].url} img={imarketina} description={inspirations[3].description} />
                </section>


                <h1 className='text-xl text-center'>Typography</h1>
                <span className='text-center'>
                    I found the style of Imarketina very cool, which is why I decided to create my portfolio in a similar style. Now I had to find a font that matches the style of Imarketina.
                </span>
                <img src={typography} alt='typography' className='mx-auto mt-5 section_image mb-4 grayscale hover:grayscale-0' />
                <span className='text-center mb-10'>
                    After trying out a few fonts, LunchType22 Expanded Medium seems to be a good fit.
                </span>
            </div>
        </div>
    )
}

export default BuildUp