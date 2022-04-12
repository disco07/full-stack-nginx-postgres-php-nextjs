import { useEffect, useState } from 'react';

interface Props {
  currentPage: string;
  prevPage: string;
}

const usePath = (): Props => {
  const [path, setPath] = useState<Props>({
    currentPage: '',
    prevPage: '',
  });

  useEffect(
    () =>
      setPath({
        currentPage: sessionStorage.getItem('currentPath'),
        prevPage: sessionStorage.getItem('prevPath'),
      }),
    [],
  );

  return path;
};

export default usePath;
