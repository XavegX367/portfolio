import { faTimes } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import fragments from './fragments.json'

function Navigation({sideBarToggle, setSideBarToggle}) {
  const handleClick = () => {
    setSideBarToggle();
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSideBarToggle(!sideBarToggle);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [sideBarToggle, setSideBarToggle]);

  return (
    <>
      {/* Create a full screen overlay that contains some nav links */}
      <div className={`${sideBarToggle ? "h-full opacity-100" : "h-0 opacity-0"} ease-in-out fixed select-none z-50 transition-all w-full bg-black flex justify-center items-center duration-150`}>
        <div className='fixed top-6 md:top-8'>
            <FontAwesomeIcon icon={faTimes} 
              className={`${sideBarToggle && "rotate-180"} cursor-pointer text-3xl md:text-6xl fixed right-6 md:right-14 duration-500 text-gray-400 hover:text-white transition-all ease-in-out`} 
              onClick={handleClick}
            />
        </div>
        <nav className={`${sideBarToggle ? "" : "hidden"} flex gap-y-5 flex-col justify-center items-center`}>
          {
            fragments.map((fragment) => {
              return (
                <NavItem key={fragment.id} name={fragment.name} path={fragment.path} closeNavigation={handleClick}/>
              )
            
            })
          }
        </nav>
      </div>
    </>
  )
}

Navigation.propTypes = {
  sideBarToggle: PropTypes.bool.isRequired,
  setSideBarToggle: PropTypes.func.isRequired
}

export default Navigation
