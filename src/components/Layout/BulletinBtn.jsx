import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function BulletinBtn({name, path}) {
    const navigate = useNavigate();
    return (
        <>
            <ul onClick={() => navigate(path)} className="flex flex-col gap-y-2 list-disc hover:list-none hover:text-black hover:bg-white rounded-full">
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