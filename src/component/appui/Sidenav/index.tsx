
'use client'
import React from 'react';
import IconHome from '../Icons/IconHome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconDate from '../Icons/IconDate';
import IconBulb from '../Icons/IconBulb';

const SideNav: React.FC = () => {
  const pathname = usePathname()
  let active = "flex bg-blue-100 px-6 py-2 whitespace-nowrap";
  let inActive = "flex px-6 py-2 whitespace-nowrap";
  
  return (
    <div className="max-w-64 h-screen bg-white shadow-md flex flex-col">
      <div className="p-4 bg-blue-500 text-white text-xl font-bold">LOGO</div>
      <div className="flex-1 overflow-auto pt-4">
        <ul>
          <li className=""><Link href="/home/tasks" className={pathname=="/home/tasks"? active: inActive}>
            <IconHome className="size-5 me-2" /> <span>Home</span></Link>
          </li>
       
          <li className=""><Link href="/home/demo" className={pathname=="/home/demo"? active: inActive}>
            <IconBulb className="size-5 me-2" /> <span>Treat Task</span></Link>
          </li>
          <li className=""><Link href="/" className={pathname=="/home/task-logs"? active: inActive}>
            <span>Logout</span></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
