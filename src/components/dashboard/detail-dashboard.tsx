import Image from "next/image";
import { useState } from "react";
import Modal from "../modal";
import ModalDetail from "./modal-detail";

export default function DetailDashbaord() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col p-8 relative">
      <span className="text-2xl font-bold mb-7">PROJECT</span>
      <div className="flex justify-between mb-7">
        <ProjectImage onClick={() => setIsOpenModal(true)} />
        <ProjectImage onClick={() => setIsOpenModal(true)} />
        <ProjectImage onClick={() => setIsOpenModal(true)} />
        <ProjectImage onClick={() => setIsOpenModal(true)} />
      </div>
      <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
        <ModalDetail />
      </Modal>
    </div>
  );
}

function ProjectImage({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <div
      className="flex flex-col w-[230px] h-[250px] bg-slate-200 hover:scale-110 cursor-pointer"
      onClick={onClick}
      onKeyUp={onClick}
    >
      <div className="w-full h-[80%]">
        <Image src={""} alt="image" width={200} height={180} />
      </div>
      <div className="w-full h-[20%] bg-red-300 flex justify-center items-center ">
        <span className="">Project 1</span>
      </div>
    </div>
  );
}
