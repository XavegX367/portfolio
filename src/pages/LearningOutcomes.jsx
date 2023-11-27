import Outcome from "../components/LearningOutcomes/Outcome"
import outcomes from '../components/LearningOutcomes/outcomes.json'

function LearningOutcomes() {
    return (
        <div className='mx-4 mt-5 text-lg'>
        <div className='flex justify-left mt-7 flex-col mb-10'>
            <h1 className='text-2xl text-left mb-2'>Learning Outcomes</h1>
            <section className='flex flex-col justify-center mt-5 gap-y-5'>
                {
                    outcomes.map((outcome) => (
                        <Outcome key={outcome.id} id={outcome.id} name={outcome.name} description={outcome.description} prove={outcome.prove} img=""/>
                    ))
                }
            </section>

        </div>
    </div>
    )
}

export default LearningOutcomes