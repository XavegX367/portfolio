import Outcome from "../components/LearningOutcomes/Outcome"
import outcomes from '../components/LearningOutcomes/outcomes.json'

function LearningOutcomes() {
    return (
        <div className='mx-4 mt-5 text-lg'>
        <div className='flex justify-left mt-7 flex-col mb-10'>
            <h1 className='text-2xl text-left mb-2'>Learning Outcomes</h1>
            <section className='flex flex-col justify-center mt-5 gap-y-5'>
                <Outcome id={outcomes[0].id} name={outcomes[0].name} description={outcomes[0].description} prove={outcomes[0].prove} img=""/>
                <Outcome id={outcomes[1].id} name={outcomes[1].name} description={outcomes[1].description} prove={outcomes[1].prove} img=""/>
                <Outcome id={outcomes[2].id} name={outcomes[2].name} description={outcomes[2].description} prove={outcomes[2].prove} img=""/>
                <Outcome id={outcomes[3].id} name={outcomes[3].name} description={outcomes[3].description} prove={outcomes[3].prove} img=""/>
                <Outcome id={outcomes[4].id} name={outcomes[4].name} description={outcomes[4].description} prove={outcomes[4].prove} img=""/>
                <Outcome id={outcomes[5].id} name={outcomes[5].name} description={outcomes[5].description} prove={outcomes[5].prove} img=""/>
            </section>

        </div>
    </div>
    )
}

export default LearningOutcomes