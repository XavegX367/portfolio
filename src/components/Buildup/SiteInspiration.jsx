import PropTypes from 'prop-types';

function SiteInspiration({id, name, url, img, description}) {
    return (
        <div className='flex flex-col gap-y-1 mb-10'>
        <h1 className='text-2xl md:ml-4'>{id}. <a className='url' href={url} target='blank'>{name}</a></h1>
        <div className='md:flex flex-col md:flex-row items-center self-center justify-center md:items-center md:align-middle md:gap-x-4 md:mx-10'>
            <a href={url} target='blank'><img src={img} alt='conference_awwwards' className='w-72 h-42 md:w-1/4 self-center md:mt-2 section_image' /></a>
            <span className='text-center text-sm md:text-xl italic'>
                {description}
            </span>
        </div>
    </div>
    )
}

SiteInspiration.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default SiteInspiration