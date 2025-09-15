import { Grid, Skeleton } from "@mui/material";
import { memo } from "react";

interface IProps {
  isDesktop: boolean;
}

function MatchSheduleSkeleton({ isDesktop }: IProps) {
  return (
    <>
      <Skeleton variant="rounded" width={isDesktop ? 210 : 120} height={20} />

      <Grid container spacing={2} sx={{ mt: isDesktop ? 4 : 2 }}>
        {Array(isDesktop ? 3 : 1)
          .fill("")
          .map((_, index) => (
            <Grid size={isDesktop ? 4 : 12} key={index}>
              <Skeleton variant="rounded" width="100%" height={118} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default memo(MatchSheduleSkeleton);
