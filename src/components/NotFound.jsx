const NotFound = () => {
  return (
    <div className="h-[calc(100%-20%)] lg:h-full flex items-center justify-center text-[2rem] lg:text-[3rem] gap-3 dark:text-white">
      <span className="font-bold">404</span>{" "}
      <span className="mt-[-3px] lg:mt-[-9px]">|</span>
      <span className="font-thin">Page Not Found</span>
    </div>
  );
};

export default NotFound;
