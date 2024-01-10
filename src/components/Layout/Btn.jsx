import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Btn({content, link, internal=false}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (internal) {
            navigate(link);
        } else {
            window.open(link, "_blank");
        }
    }

    return (
        <>
            <button onClick={() => handleClick()}
                className="bg-transparent text-xl md:text-6xl uppercase text-gray-400 border-gray-300 border-2 
                font-bold py-1 px-2 md:py-2 md:px-4 rounded-xl transition-colors duration-300 ease-in-out 
                hover:bg-slate-200 hover:text-black"
            >
                {content}
            </button>
        </>
    )
}

Btn.propTypes = {
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    internal: PropTypes.bool,
};

export default Btn