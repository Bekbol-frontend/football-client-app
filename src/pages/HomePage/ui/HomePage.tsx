import { memo } from "react";
import { Banner } from "@/entities/Banner";
import { Leagues } from "@/entities/Leagues";

function HomePage() {
  return (
    <>
      <Banner />
      <Leagues />
    </>
  );
}

export default memo(HomePage);
