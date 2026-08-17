import React from 'react'

const Bgcards = ({ logo, image, highlight1, highlight2, highlight3, cta, dark }) => {
  return (
    <div className={`w-70 rounded-2xl overflow-hidden relative ${dark ? 'bg-[#132f27]' : 'bg-white border border-gray-200 shadow-sm'}`}>
      <img
        src={image}
        className={`w-full h-85 object-cover ${dark ? 'opacity-45' : 'opacity-70'}`}
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className={`text-2xl font-bold tracking-tight italic ${dark ? 'text-white' : 'text-emerald-950'}`}>
          {logo}
        </div>
        <div>
          <h3 className={`text-2xl font-bold leading-snug mb-5 ${dark ? 'text-[#3ddc97]' : 'text-emerald-700'}`}>
            {highlight1}{' '}
            <span className={dark ? 'text-white' : 'text-emerald-950'}>{highlight2}</span>{' '}
            {highlight3}
          </h3>
          <button className={`rounded-full px-5 py-2.5 text-sm font-medium ${dark ? 'bg-[#1d4a3d] text-white' : 'bg-emerald-700 text-white'}`}>
            {cta}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bgcards