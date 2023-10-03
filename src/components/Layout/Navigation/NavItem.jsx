import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavItem({closeNavigation, path, name}) {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    closeNavigation();
  }

  return (
    <button onClick={() => navigateTo(path)} className="text-3xl text-white hover:text-gray-400">{name}</button>
  )
}

export default NavItem