import { HazloPostsImageNumber } from "@/components/charts/HazloPostsImageNumber";
import { HazloPostsTotalNumber } from "@/components/charts/HazloPostsTotalNumber";
import { HazloPostsVideoNumber } from "@/components/charts/HazloPostsVideoNumber";

export default function Posts() {
  return (
    <div className="flex flex-col gap-10 px-4">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl text-white font-bold">Posts Stats</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 h-[250px]">
            <HazloPostsTotalNumber />
          </div>
          <div className="col-span-1 h-[250px]">
            <HazloPostsImageNumber />
          </div>
          <div className="col-span-1 h-[250px]">
            <HazloPostsVideoNumber />
          </div>
        </div>
      </div>
    </div>
  );
}
