import Image from "next/image";

import Mainposter from "../../public/main poster img.png";

//flex and grid - this helps in keeping text and image side by side

export default function Home () {
  return (
    <div className="flex items-center">
      <Image src={Mainposter} alt="/main poster img.png"
      
      height={400}
      width={400}
      />
    <div>
  <h2 className="text-3xl font-bold text-grey-900">Create an invite-only page where you belong

    </h2>
    <p className="text-grey-700 pt-1">
      May indulgence difficulty ham can put especially.
      Bringing remmember for supplied her why was confined.
      Middleton principle did she procuring extensive believing add.
      He fruit oh enjoy it of whose table.
    </p>
    </div>
    </div>
  )
}