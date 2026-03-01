"use client"
import Image from "next/image"
import btnImage from "../../public/icons/arrow-down.svg"
const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn"  onClick={()=>console.log("clicked")}>
        <a href="#events">
            Explore Events
            <Image src={btnImage} alt="arrow-down" width={24} height={24} className="explore-btn"/>
        </a>
    </button>
  )
}

export default ExploreBtn