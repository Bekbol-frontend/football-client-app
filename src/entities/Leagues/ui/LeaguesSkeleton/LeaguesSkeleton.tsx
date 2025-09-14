import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { Skeleton, Stack } from "@mui/material";
import { memo } from "react";

function LeaguesSkeleton() {
  const { isDesktop } = useResponsive();

  return (
    <Stack direction="row" gap={1}>
      {Array(isDesktop ? 12 : 7)
        .fill("")
        .map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            width="100%"
            height={isDesktop ? 50 : 40}
          />
        ))}
    </Stack>
  );
}

export default memo(LeaguesSkeleton);
