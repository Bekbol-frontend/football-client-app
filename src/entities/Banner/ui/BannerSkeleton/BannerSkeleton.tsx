import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Skeleton, Stack } from "@mui/material";
import { memo } from "react";

function BannerSkeleton() {
  const { isDesktop } = useResponsive();

  return (
    <>
      <Skeleton
        variant="rounded"
        width="100%"
        height={isDesktop ? 350 : 150}
        style={{
          marginBottom: isDesktop ? 20 : 10,
        }}
      />
      <Stack direction="row" gap={1}>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Skeleton
              variant="rounded"
              width="100%"
              height={isDesktop ? 100 : 50}
              key={i}
            />
          ))}
      </Stack>
    </>
  );
}

export default memo(BannerSkeleton);
