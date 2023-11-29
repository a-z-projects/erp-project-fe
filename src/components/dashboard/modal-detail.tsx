import Image from "next/image";
import ProgressBar from "../progress-bar";

export default function ModalDetail() {
  return (
    <div className="flex flex-col gap-y-3 bg-white rounded-lg w-[80vw]">
      <div className="flex gap-4 p-5 rounded-lg h-[200px]">
        <div className="w-full">
          <ProjectImage />
        </div>
        <div className="w-full border-[1px] border-slate-200 rounded-lg">
          <ProjectBar />
        </div>
        <div className="w-full">
          <ProjectCard title="Project Information">
            <div className="flex flex-wrap p-3 gap-3">
              <div>SPK</div>
              <div>RAB</div>
              <div>RAP</div>
              <div>PR</div>
              <div>PO</div>
            </div>
          </ProjectCard>
        </div>
      </div>
      <div className="flex gap-x-4 w-full p-5 justify-between">
        <div className="flex flex-col gap-y-3 w-[70%]">
          <div className="flex gap-x-3">
            <div className="w-full h-[240px] border-[1px] border-slate-200 rounded-lg"></div>
            <div className="w-full h-[240px] border-[1px] border-slate-200 rounded-lg"></div>
          </div>
          <div className="w-full border-[1px] border-slate-200 h-[130px] rounded-lg flex flex-col p-3">
            <span className="font-bold">Dokumentasi</span>
            <div className="w-full h-full flex gap-x-3">
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
              <div className="h-20 w-20 bg-slate-200"></div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <ProjectCard title="Daily Activity">
            <div className="flex flex-col gap-y-3 p-4">
              <span className="w-full border-b-[1px] border-slate-200 text-center">
                Senin, 23 Jan 2023
              </span>
              <span className="w-full border-b-[1px] border-slate-200 text-center">
                Senin, 23 Jan 2023
              </span>
              <span className="w-full border-b-[1px] border-slate-200 text-center">
                Senin, 23 Jan 2023
              </span>
            </div>
          </ProjectCard>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 p-5 h-[200px]">
        <div className="row-span-2 rounded-lg">
          <ProjectImage />
        </div>
        <div className="row-span-2 border-[1px] border-slate-200 rounded-lg">
          <ProjectBar />
        </div>
        <div className="row-span-2 rounded-lg">
          <ProjectCard title="Material">
            <div></div>
          </ProjectCard>
        </div>
      </div>
    </div>
  );
}

function ProjectImage() {
  return (
    <div className="flex flex-col w-full h-full bg-slate-200 rounded-lg">
      <div className="w-full h-[20%] bg-red-300 flex justify-center items-center rounded-t-lg">
        <span className="">Project 1</span>
      </div>
      <div className="w-full h-[80%]">
        <Image src={""} alt="image" width={200} height={180} />
      </div>
    </div>
  );
}

function ProjectBar() {
  return (
    <div className=" rounded-lg p-3 flex flex-col gap-y-3 justify-center items-center">
      <span className="font-bold">Project Progress</span>
      <div className="w-[400px] h-[50%] justify-center items-center">
        <ProgressBar />
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  children: React.ReactNode;
}
function ProjectCard({ children, title }: Readonly<ProjectCardProps>) {
  return (
    <div className="flex flex-col border-[1px] border-slate-200 w-full h-full rounded-lg">
      <div className="flex justify-center items-center bg-red-300 w-full text-white p-3 rounded-t-lg">
        {title}
      </div>
      {children}
    </div>
  );
}
