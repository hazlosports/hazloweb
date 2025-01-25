import { HazloCoachesList } from "@/components/charts/HazloCoachesList";
import { HazloCoachesNumber } from "@/components/charts/HazloCoachesNumber";
import { HazloCoachesRequestNumber } from "@/components/charts/HazloCoachesRequestNumber";

export default async function CoachesPage() {
  return (
    <div className="flex flex-col gap-10 px-4">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl text-white font-bold">Coaches</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3 h-[400px]">
            <HazloCoachesList />
          </div>
          <div className="col-span-1 h-[400px] flex flex-col gap-4">
            <div className="h-[192px]">
              <HazloCoachesNumber />
            </div>
            <div className="h-[192px]">
              <HazloCoachesRequestNumber />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl text-white font-bold">Pending Coaches</h2>
      </div>
    </div>
  );
}
