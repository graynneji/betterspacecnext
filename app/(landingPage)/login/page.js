import { Suspense } from "react";
import Login from "../../_components/Login/Login";
export const metadata = {
  title: "Login",
};
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
