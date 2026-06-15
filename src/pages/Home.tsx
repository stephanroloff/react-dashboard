import Spacer from "../components/Spacer";
import { CardSmall } from "../components/Card";
import Countdown from "@/components/Countdown";
import PageTransition from "@/components/PageTransition";

function Home() {
  return (
    <PageTransition>
      <CardSmall className="w-[1000px] bg-red-300/10 border-red-400 border-1 py-4 px-2 my-6">
        <p className="text-2xl font-bold mb-4 text-red-400">Important Notice</p>
        <p>
          We are currently experiencing some technical issues with our system.
          Please check back later.
        </p>
        <Spacer height={10} />
        <p>Thank you for your understanding.</p>
      </CardSmall>
      <div className="flex gap-4 mt-4">
        <CardSmall className="w-[1000px] bg-green-300/10 border-green-400 border-1">
          <Countdown targetDate={new Date("2026-06-29T00:00:00")} />
        </CardSmall>
        <CardSmall>
          <Spacer height={100} />
        </CardSmall>
      </div>
      <div className="flex gap-4 mt-4">
        <CardSmall>
          <Spacer height={100} />
        </CardSmall>
        <CardSmall className="w-[300px]">
          <Spacer height={100} />
        </CardSmall>
      </div>
      <Spacer height={1000} />
      <p className="text-2xl font-bold">End</p>
    </PageTransition>
  );
}

export default Home;
