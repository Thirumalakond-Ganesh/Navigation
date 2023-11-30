import React from 'react'

const Navigation = () => {
    const Menus=[
        {name:"Home",icon:"home-outline",dis:"translate-x-0"},
        {name:"Profile",icon:"person-outline",dis:"translate-x-16"},
        {name:"Message",icon:"chatbubble-outline",dis:"translate-x-32"},
        {name:"Photos",icon:"camera-outline",dis:"translate-x-48"},
        {name:"Settings",icon:"settings-outline",dis:"translate-x-64"},
    ]
  return (
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
        <ul className="flex relative">
           {
            Menus.map((menu,i)=>(
                <li key={i}>
                    <a className="flex flex-col text-centerpt-6">
                        <span className="text-xl cursor-pointer">
                            <icon-icon name={menu.icon}></icon-icon>
                        </span>
                        <span>{menu.name}</span>
                    </a>
                </li>
            ))
           }
        </ul>
        
    </div>
  )
};

export default Navigation;
