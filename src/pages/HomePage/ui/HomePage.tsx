import { memo } from "react";
import { Banner } from "@/entities/Banner";
import { Leagues } from "@/entities/Leagues";
import { MatchShedule } from "@/entities/MatchShedule";

function HomePage() {
  return (
    <>
      <Banner />
      <Leagues />
      <MatchShedule />
    </>
  );
}

export default memo(HomePage);
