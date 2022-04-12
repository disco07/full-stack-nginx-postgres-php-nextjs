import { useRouter } from 'next/router';

const useVerifyPath = (): boolean => {
  const router = useRouter();
  const route = ['search-offers', 'search-places', 'search'];
  return route.includes(router.route.split('/')[1]);
};

export default useVerifyPath;
