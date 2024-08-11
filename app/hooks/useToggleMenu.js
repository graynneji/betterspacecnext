import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/menuModalSlice";

export const useHandleMenuClick = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuModal.isMenuOpen);
  dispatch(toggleMenu());
  return isMenuOpen;
};
