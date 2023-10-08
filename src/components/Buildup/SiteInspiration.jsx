import PropTypes from 'prop-types';

function SiteInspiration({id, name, url, img, description}) {
    return (
        <div className='flex flex-col gap-y-1'>
        <h1 className='text-2xl'>{id}. <a className='url' href={url} target='blank'>{name}</a></h1>
        <img src={img} alt='conference_awwwards' className='w-72 h-42 self-center' />
        <span className='text-center text-sm italic'>
            {description}
        </span>
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