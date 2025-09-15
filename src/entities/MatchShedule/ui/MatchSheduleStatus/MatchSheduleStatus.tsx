import { memo, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { matchStatus } from "../../model/matchStatus";
import type { SetURLSearchParams } from "react-router-dom";
import { MatchStatus } from "../../model/types";

interface IProps {
  setSearchParams: SetURLSearchParams;
}

function MatchSheduleStatus({ setSearchParams }: IProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (val: MatchStatus) => {
    setAnchorEl(null);
    if (typeof val !== "string") return;

    const today = new Date();

    switch (val) {
      case MatchStatus.Live:
        setSearchParams({ category: MatchStatus.Live });
        break;
      case MatchStatus.Yesterday:
        const yest = new Date(today);
        yest.setDate(today.getDate() - 1);
        const yesterday = yest.toISOString().split("T")[0];
        setSearchParams({ category: yesterday });
        break;
      case MatchStatus.Today:
        setSearchParams({ category: today.toISOString().split("T")[0] });
        break;

      default:
        const tom = new Date(today);
        tom.setDate(today.getDate() + 1);
        const tomorrow = tom.toISOString().split("T")[0];
        setSearchParams({ category: tomorrow });
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {matchStatus.map((el) => (
          <MenuItem onClick={() => handleClose(el.value)} key={el.value}>
            {el.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default memo(MatchSheduleStatus);
