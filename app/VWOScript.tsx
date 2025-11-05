'use client';

import { useEffect } from 'react';

export const VWOScript = () => {
  useEffect(() => {
    (function() {
      var vwoScript = document.createElement('script');
      vwoScript.src = 'https://glbdacdn.vwo.com/lib/1162388.js';
      vwoScript.id = 'vwoCode';
      vwoScript.async = true;
      vwoScript.referrerPolicy = 'no-referrer-when-downgrade';

      document.head.appendChild(vwoScript);
    })();
  }, []);

  return null;
};
