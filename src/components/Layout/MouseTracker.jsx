import { useEffect } from "react";

function MouseTracker() {

  useEffect(() => {
    let cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px",
      cursor.style.top = e.clientY + "px";
    });
  }, []);
    
  return (
    <div className='cursor hidden md:block' id="cursor"></div>
  )
}

export default MouseTracker