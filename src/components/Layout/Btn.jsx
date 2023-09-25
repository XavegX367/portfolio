import PropTypes from 'prop-types';

function Btn({content}) {

    return (
        <>
            <button className="bg-transparent text-slate-200 border-slate-200 border-2 font-bold py-2 px-4 rounded-xl transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black">
                {content}
            </button>
        </>
    )
}

Btn.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Btn