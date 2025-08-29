import { useForm } from "react-hook-form";
import { useAddUser, useUpdateUser } from "../hooks/useUsers";
import toast from "react-hot-toast";
import { useModal } from "./Modal";

const AddAndEditUser = ({ data, type = "add" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { close } = useModal();

  const { updateUser, isPending: isUpdatingUser } = useUpdateUser();
  const { addUser, isPending: isAddingUser } = useAddUser();

  function onSubmit(formdata) {
    if ((!data && type === "edit") || !formdata) return;
    toast.loading("updating user, please wait..", { id: 1 });
    type === "edit"
      ? updateUser(
          { updates: formdata, userId: data?.id },
          { onSuccess: close }
        )
      : type === "add"
      ? addUser({ userData: formdata }, { onSuccess: close })
      : null;
  }

  return (
    <form
      className="p-4 md:p-[2rem] min-h-[400px] flex flex-col gap-2 md:h-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="fullname" className="block mb-[2px]">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          defaultValue={data?.name ?? ""}
          className="border border-gray-300 w-full h-[35px] px-2 dark:border-[#3A3A55]"
          {...register("fullname", {
            required: {
              value: true,
              message: "this field is required",
            },
          })}
        />
        {errors?.fullname && (
          <span className="text-red-600 text-[14px]">
            {errors?.fullname?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="username" className="block mb-[2px]">
          Username{" "}
        </label>
        <input
          type="text"
          id="username"
          defaultValue={data?.username ?? ""}
          className="border border-gray-300 w-full h-[35px] px-2 dark:border-[#3A3A55]"
          {...register("username", {
            required: {
              value: true,
              message: "this field is required",
            },
          })}
        />
        {errors?.username && (
          <span className="text-red-600 text-[14px]">
            {errors?.username?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="mail" className="block mb-[2px]">
          E-mail{" "}
        </label>
        <input
          type="email"
          id="mail"
          defaultValue={data?.email ?? ""}
          className="border border-gray-300 w-full h-[35px] px-2 dark:border-[#3A3A55]"
          {...register("mail", {
            required: {
              value: true,
              message: "this field is required",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors?.mail && (
          <span className="text-red-600 text-[14px]">
            {errors?.mail?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="ph" className="block mb-[2px]">
          Phone No{" "}
        </label>
        <input
          type="text"
          id="ph"
          defaultValue={data?.phone ?? ""}
          className="border border-gray-300 w-full h-[35px] px-2 dark:border-[#3A3A55]"
          {...register("phone", {
            required: {
              value: true,
              message: "this field is required",
            },
          })}
        />
        {errors?.phone && (
          <span className="text-red-600 text-[14px]">
            {errors?.phone?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="location">Location </label>
        <input
          type="text"
          id="location"
          defaultValue={data?.address?.street ?? ""}
          className="border border-gray-300 w-full h-[35px] px-2 dark:border-[#3A3A55]"
          {...register("location", {
            required: {
              value: true,
              message: "this field is required",
            },
          })}
        />
        {errors?.location && (
          <span className="text-red-600 text-[14px]">
            {errors?.location?.message}
          </span>
        )}
      </div>

      <button
        disabled={isUpdatingUser || isAddingUser}
        className="disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 disabled:border-0 h-[40px] md:w-50 border bg-green-600 mt-4 text-white hover:text-green-800 hover:bg-transparent cursor-pointer dark:border-[#3A3A55]"
      >
        {type === "add" ? "Add" : " Update"} user
      </button>
    </form>
  );
};

export default AddAndEditUser;
