import { BsFillArrowUpCircleFill } from "react-icons/bs";
const ToTopButton = () => {
const goToTop = () => {
}
  return (
    <a href = '#summary'>
        <BsFillArrowUpCircleFill onClick={goToTop}
      className=" bg-yellow text-purple-500 text-4xl cursor-pointer absolute bottom-5 right-5 z-[500] rounded-full"
      title="Go To Top"
    />
    </a>
  );
};

export default ToTopButton;
