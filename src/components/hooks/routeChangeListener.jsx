"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useContext} from 'react';
import { NavigationContext } from '../utilities/navigationContext';

export default function RouteChangeListener (){
  const {setNavigationCompleted} = useContext(NavigationContext)
  const pathname = usePathname();

  useEffect(() => {
    setNavigationCompleted(true)
  }, [pathname]);

  return null;
};
