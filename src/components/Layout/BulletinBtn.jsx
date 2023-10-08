import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function BulletinBtn({name, path}) {
    const navigate = useNavigate();
    return (
        <>
            <ul onClick={() => navigate(path)} className="flex flex-col gap-y-2 list-none md:list-disc hover:list-none hover:text-black hover:bg-white rounded-full mx-4 my-4 md:mx-0 md:my-0">
                <li 
                    className="text-center text-xl md:text-5xl md:mx-16 cursor-pointer select-none md:hover:text-6xl hover:text-2xl transition-all duration-300
                    px-4 py-2"
                >
                    {name}
                </li>
            </ul>
        </>
    )
}

BulletinBtn.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default BulletinBtn