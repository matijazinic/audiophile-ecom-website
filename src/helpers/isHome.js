const { useRouter } = require("next/router");

export function useIsHome() {
  const router = useRouter();
  return router.pathname === "/";
}
