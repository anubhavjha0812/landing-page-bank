import styles from "../style";
import { arrowUp } from "../assets";

const NavGetStarted = () => (
  <div
    className={`${styles.flexCenter} sm:w-[200px] w-[150px] sm:h-[70px] h-[60px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-row bg-primary w-[100%] h-[100%] rounded-full sm:px-4 px-2`}
    >
      <div className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-full bg-blue-gradient flex items-center justify-center sm:mr-2 mr-1">
        <img
          src={arrowUp}
          alt="arrow-up"
          className="sm:w-[20px] w-[15px] sm:h-[20px] h-[15px] object-contain"
        />
      </div>

      <p className="font-poppins font-medium sm:text-[18px] text-[14px] sm:leading-[23.4px] leading-[20px] text-gradient">
        <span className="text-gradient">Get</span> Started
      </p>
    </div>
  </div>
);

export default NavGetStarted;
