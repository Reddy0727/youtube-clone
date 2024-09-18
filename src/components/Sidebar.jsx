import React from 'react'
import { helpLinks, mainLinks, secondaryLinks, textLinks } from '../utilities/constants';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 
  return (
    <div className=" bg-[#212121] px-3 pt-2 sticky top-[10vh] h-[90vh] overflow-y-auto scroll">
         <ul className="flex  flex-col border-b-2 border-gray-700 text-[0.7rem]">
           {mainLinks.map(({ icon, name }) => {
             return (
               <li
                 key={name}
                 className={`pl-6 py-2 hover:bg-zinc-600 rounded-xl  ${
                   name === "Home" ? "bg-slate-600" : ""
                 }`}
               >
                 <Link to="/" className="flex items-center gap-5">
                   {icon}
                   <span className=" tracking-wider">{name}</span>
                 </Link>
               </li>
             );
           })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 text-[0.7rem]">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl `}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className=" tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 text-[0.7rem]">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-2 hover:bg-zinc-600 rounded-xl `}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className=" tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-[14px] p-2 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-[14px] p-2 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-2 text-[12px] text-zinc-400">&copy; {new Date().getFullYear()} Google</span>
    </div>
  )
}

export default Sidebar
