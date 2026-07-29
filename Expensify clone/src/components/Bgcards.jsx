import React from 'react'

const Bgcards = ({ logo, image, highlight1, highlight2, highlight3, cta }) => {
  return (
    <div className="w-70 rounded-2xl overflow-hidden relative bg-[#132f27]">
      <img
        src={image}
        className="w-full h-85 object-cover opacity-45"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="text-white text-2xl font-bold tracking-tight italic">{logo}</div>
        <div>
          <h3 className="text-[#3ddc97] text-2xl font-medium leading-snug mb-5">
            {highlight1} <span className="text-white">{highlight2}</span>{' '}
            {highlight3}
          </h3>
          <button className="bg-[#1d4a3d] text-white rounded-full px-5 py-2.5 text-sm font-medium">
            {cta}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bgcards
