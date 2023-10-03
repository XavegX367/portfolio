import PropTypes from 'prop-types';

function Btn({content, link}) {

    return (
        <>
            <a target='blank' href={link} 
                className="bg-transparent text-xl md:text-6xl uppercase text-gray-400 border-gray-300 border-2 
                font-bold py-1 px-2 md:py-2 md:px-4 rounded-xl transition-colors duration-300 ease-in-out 
                hover:bg-slate-200 hover:text-black"
            >
                {content}
            </a>
        </>
    )
}

Btn.propTypes = {
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Btn