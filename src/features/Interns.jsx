import Pagination from "../components/Pagination";
import { useFetchUsers } from "../hooks/useUsers";
import InternCard from "../components/InternCard";
import { useState } from "react";
import Modal from "../components/Modal";
import InternFullcard from "../components/InternFullcard";
import AddAndEditUser from "../components/AddAndEditUser";

const Interns = () => {
  const { interns, totalUsers, isPending } = useFetchUsers();
  const [activeInternId, setActiveInternId] = useState(null);

  if (isPending)
    return (
      <div className="h-[calc(100%-20%)] lg:h-full flex justify-center items-center">
        <div className="ease-linear rounded-full border-8 border-gray-300 h-32 w-32 lg:h-25 lg:w-25 animate-pulse bg-teal-700"></div>
      </div>
    );
  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-between p-3 dark:text-white">
          <h1 className="lg:text-[2.5rem] text-3xl font-semibold">
            All Interns
          </h1>
          <Modal>
            <Modal.Open opens="add_intern">
              <button className="border px-3 lg:px-[20px] py-[5px] lg:py-[10px] rounded bg-green-700 text-white flex items-center justify-center p-2 md:p-1 md:px-4 gap-1 transition-all duration-300 hover:bg-green-900 cursor-pointer dark:border-[#3A3A55]">
                Add Intern
              </button>
            </Modal.Open>
            <Modal.Window name="add_intern">
              <AddAndEditUser />
            </Modal.Window>
          </Modal>
        </div>
        <Modal>
          <div className="h-[calc(100%-180px)] lg:h-[calc(100%-140px)]">
            <div className="h-full py-4 px-2 flex gap-2 justify-start gap-y-5 lg:gap-y-10 content-start lg:justify-start flex-wrap overflow-y-auto">
              {interns?.map((intern, index) => (
                <Modal.Open key={intern?.id ?? index} opens={`intern_${index}`}>
                  <InternCard
                    intern={intern}
                    onClick={() => setActiveInternId(index)}
                  />
                </Modal.Open>
              ))}
            </div>
          </div>

          <Modal.Window name={`intern_${activeInternId}`}>
            <InternFullcard data={interns?.at(activeInternId)} />
          </Modal.Window>
        </Modal>
        <Pagination total={totalUsers} />
      </div>
    </>
  );
};

export default Interns;
