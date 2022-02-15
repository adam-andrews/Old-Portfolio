import React from 'react'
import Image from 'next/image';
import orangeGuy from "../images/orangeJacket.svg";

function Card ({color,text,image}) {
  return (
    <div className="flex flex-col rounded-3xl bg-[#FCC01A] text-5xl">
        <div className="flex">
            <div className ="flex flex-col p-4">
            <h1>Figma</h1>
            <h1>Designs</h1>

            </div>
            <div>

            </div>

        </div>
    <Image
								src={orangeGuy}
								layout="responsive"
								height={1080}
								width={1920}
							/>
    </div>
  )
}

export default Card;