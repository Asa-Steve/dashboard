import { CiMail } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi2";
import { RiEditLine } from "react-icons/ri";
import Modal, { useModal } from "./Modal";
import AddAndEditUser from "./AddAndEditUser";
import { useDeleteUser } from "../hooks/useUsers";
import DeletePrompt from "./DeletePrompt";

const InternFullcard = ({ data }) => {
  const { close } = useModal();
  const { deleteUser, isPending: isDeletingUser } = useDeleteUser();

  return (
    <div className="min-h-[480px] md:min-h-[280px] py-4 md:flex md:gap-2 md:items-center relative">
      <div className="md:w-[40%] md:text-center">
        <img
          src={`https://ui-avatars.com/api/?name=${data?.name}&background=random`}
          alt={`image avatar of ${data?.name}`}
          className="w-[150px] m-auto h-[150px] mb-4 object-cover rounded-full group-hover:grayscale transition-all duration-300"
        />
        <h3 className="md:flex gap-2 items-center text-2xl justify-center hidden">
          {data?.name}
        </h3>
      </div>
      <div className="flex flex-col gap-2 md:w-[58%]">
        <h3 className="flex gap-2 items-center  text-2xl justify-center md:hidden">
          {data?.name}
        </h3>
        <p className="flex items-center justify-start gap-4 border border-gray-200 py-2 w-60 md:w-full italic mx-auto px-3 dark:border-[#3A3A55]">
          <RiUserLine />
          {data?.username}
        </p>
        <p className="flex items-center justify-start gap-4 border border-gray-200 py-2 w-60 md:w-full italic mx-auto px-3 dark:border-[#3A3A55]">
          <CiMail />
          {data?.email}
        </p>
        <p className="flex items-center justify-start gap-4 border border-gray-200 py-2 w-60 md:w-full italic mx-auto px-3 dark:border-[#3A3A55]">
          <MdOutlinePhone /> {data?.phone}
        </p>
        <p className="flex items-center justify-start gap-4 border border-gray-200 py-2 w-60 md:w-full italic mx-auto px-3 dark:border-[#3A3A55]">
          <RiMapPinLine /> {data?.address?.street}
        </p>

        <div className="border border-gray-100 p-1 rounded flex w-60 md:w-full mx-auto justify-between dark:border-[#3A3A55]">
          <Modal>
            <Modal.Open opens={`edit-intern_${data?.id}`}>
              <button className="border rounded bg-green-700 text-white flex items-center justify-center p-2 md:p-1 md:px-4 gap-1 transition-all duration-300 hover:bg-green-900 cursor-pointer dark:border-[#3A3A55]">
                <span>Edit</span>
                <RiEditLine />
              </button>
            </Modal.Open>
            <Modal.Open opens="delete_prompt">
              <button
                disabled={isDeletingUser}
                className="border rounded bg-red-500 text-white flex items-center justify-center p-2 md:p-1 md:px-4 gap-1 transition-all duration-300 hover:bg-transparent hover:text-red-500 hover:border-red-300 cursor-pointer dark:border-[#3A3A55]"
              >
                <span>Delete User</span>
                <HiOutlineTrash />
              </button>
            </Modal.Open>

            <Modal.Window name="delete_prompt">
              <DeletePrompt
                onConfirm={() =>
                  deleteUser({ userId: data?.id }, { onSuccess: close })
                }
                deleting={isDeletingUser}
              />
            </Modal.Window>
            <Modal.Window name={`edit-intern_${data?.id}`}>
              <AddAndEditUser type="edit" data={data} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default InternFullcard;
