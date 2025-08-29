import { useModal } from "./Modal";

const DeletePrompt = ({
  onConfirm,
  deleting,
  text = "Are you sure you want to delete ?",
}) => {
  //getting the Modal close fn from the Modal context
  const { close } = useModal();
  return (
    <div className="min-h-[250px] flex flex-col items-center justify-center gap-3">
      <h3 className="text-2xl text-center font-bold">{text}</h3>
      <p className="italic text-center text-sm">
        kindly note that this action cannot be undone
      </p>
      <div className="mx-auto mt-4 w-[80%] md:w-[60%] flex justify-between">
        <button
          onClick={close}
          disabled={deleting}
          className="border flex items-center justify-center w-[120px] h-[35px] md:h-[40px] bg-black text-white hover:bg-transparent hover:text-black cursor-pointer transition-all duration-300 dark:border-[#3A3A55]"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={deleting}
          className="border w-[120px] h-[35px] md:h-[40px] bg-red-500 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 disabled:border-0 hover:bg-transparent hover:text-red-700 hover:border-red-700 cursor-pointer  transition-all duration-300 dark:border-[#3A3A55]"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default DeletePrompt;
