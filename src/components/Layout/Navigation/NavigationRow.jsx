import {React, useState} from 'react'
import Btn from '../Btn'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavigationRow() {
  const [sideBarToggle, setSideBarToggle] = useState(false)

  const toggleSidebar = () => {
    setSideBarToggle(!sideBarToggle);
  }

  return (
    <div className='mb-2 md:mb-0'>
    {/* Add row with LinkedIn button */}
        <Navigation sideBarToggle={sideBarToggle} setSideBarToggle={toggleSidebar} />
        <div className="flex flex-row-reverse pt-5 mr-6 md:mr-10 gap-x-12 md:gap-x-60 transition-all">

          <button className={`${sideBarToggle && "rotate-180"} text-2xl md:text-5xl text-gray-400 hover:text-white md:p-4 ease-in-out transition-all duration-500`}
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

            <Btn content={"linkedin"} link={"https://www.linkedin.com/in/joris-korsten-01a508193/"} />
        </div>
    </div>
  )
}

export default NavigationRow