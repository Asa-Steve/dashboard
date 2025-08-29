import { useIsMobile } from "../hooks/useResize";
import { RiUserLine } from "react-icons/ri";
import { CiLink, CiMail } from "react-icons/ci";

const InternCard = ({ intern, onClick }) => {
  const isMobile = useIsMobile();
  return (
    <div
      onClick={onClick}
      className="group border border-gray-100 hover:cursor-pointer hover:border-teal-700 bg-white rounded w-[48%] lg:w-[300px] lg:max-w-[300px] h-auto lg:h-[260px] lg:flex lg:flex-col self-start p-2  transition-all duration-300"
    >
      <img
        src={`https://ui-avatars.com/api/?name=${intern?.name}&background=random`}
        alt={`image avatar of ${intern?.name}`}
        className="w-full h-30 object-cover mb-3 rounded group-hover:grayscale transition-all duration-300"
      />
      <h3 className="text-md lg:text-xl mb-2 flex items-center gap-2">
        <RiUserLine />
        {intern?.name?.length > (isMobile ? 15 : 30)
          ? intern?.name?.slice(0, isMobile ? 15 : 25) + "..."
          : intern?.name}
      </h3>
      <div className=" lg:my-auto  border-t border-gray-300  pt-2">
        <p className="flex items-center gap-3 text-sm italic">
          <CiMail />
          {intern?.email?.length > (isMobile ? 20 : 30)
            ? intern?.email?.slice(0, isMobile ? 15 : 25) + "..."
            : intern?.email}
        </p>
        <span className="flex items-center gap-2 text-sm italic">
          <CiLink className="text-xl" />
          {intern?.website}
        </span>
      </div>
    </div>
  );
};

export default InternCard;
