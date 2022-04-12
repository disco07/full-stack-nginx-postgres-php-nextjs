import { useEffect, useState } from 'react';

const RenderCompleted = (): boolean => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted;
};

export default RenderCompleted;
