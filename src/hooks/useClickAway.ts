import { useEffect, RefObject } from 'react';

type EventType = MouseEvent | TouchEvent;

export const useClickAway = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: EventType) => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: EventType) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback]);
};
