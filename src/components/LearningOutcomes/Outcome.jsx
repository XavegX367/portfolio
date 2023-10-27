import PropTypes from 'prop-types';

function Outcome({id, name, prove, img, description}) {
    return (
        <div className='flex flex-col gap-y-1 mb-10'>
        <h1 className='text-2xl md:ml-4'>{id}. {name}</h1>
        <div className='md:flex flex-col md:flex-row items-left self-left justify-start md:items-center md:align-middle md:gap-x-4 md:mx-10 text-zinc-400'>
            {/* <img src={img} alt={name} className='w-72 h-42 md:w-1/4 self-center md:mt-2 section_image' /> */}
            <span className='text-left text-sm md:text-xl'>
                {description}
            </span>
        </div>
        <div className='md:flex flex-col md:flex-row items-right self-right justify-start pl-5 md:pl-10 md:items-center md:align-middle md:gap-x-4 md:mx-10 mt-2'>
            <span className='text-left text-sm md:text-xl italic'>
                {prove}
            </span>
        </div>
    </div>
    )
}

Outcome.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    prove: PropTypes.string.isRequired
}

export default Outcome