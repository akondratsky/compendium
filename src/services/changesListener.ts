import { useRecoilValue } from 'recoil';
import { changesState } from './state';
import { useEffect } from 'react';

export const useChangesListener = () => {
  const isChanged = useRecoilValue(changesState);

  useEffect(() => {
    if (isChanged) {
      window.addEventListener("beforeunload", (e) => {
        const message = 'There are changes which will be lost';
        (e || window.event).returnValue = message; //Gecko + IE
        return message; //Gecko + Webkit, Safari, Chrome etc.
      });
    }

  }, [isChanged]);
}