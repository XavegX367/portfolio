import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'

function NavItem({closeNavigation, path, name}) {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    closeNavigation();
  }

  return (
    <button onClick={() => navigateTo(path)} className="text-3xl md:text-5xl text-white transition-all ease-in-out duration-150 hover:font-serif hover:text-gray-400">{name}</button>
  )
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  closeNavigation: PropTypes.func.isRequired
};

export default NavItem