"use client"
import Image from "next/image";
import { useState } from "react";
import MinusIcon from "../dynamicIcons/minus";
import PlusIcon from "../dynamicIcons/plus";

type Props = {
  data: { title: string, description: string }
}

const SingleTab = ({ data: { title, description } }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b mb-6">
      <button className="w-full flex justify-between text-md text-gray-900 font-semibold dark:text-gray-100 pb-5" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>

        {
          isOpen && <MinusIcon /> || <PlusIcon />
        }

      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[99999px] pb-4' : 'max-h-0'}`}>
        <p>{description}</p>
      </div>

    </div>

  )
}

export default SingleTab