import { memo, useCallback, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { LagnLong, LagnShort } from "../model/types";
import { langs } from "../model/langs";

function SwitchLang() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { i18n } = useTranslation();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(
    (value: LagnShort) => {
      setAnchorEl(null);

      if (typeof value === "string") {
        i18n.changeLanguage(value);
      }
    },
    [i18n]
  );

  return (
    <div>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        startIcon={<TranslateIcon />}
        sx={{
          textTransform: "capitalize",
        }}
      >
        {i18n.language === LagnShort.EN
          ? LagnLong.EN
          : i18n.language === LagnShort.RU
          ? LagnLong.RU
          : i18n.language === LagnShort.UZ
          ? LagnLong.UZ
          : i18n.language === LagnShort.OZ
          ? LagnLong.OZ
          : i18n.language === LagnShort.KK
          ? LagnLong.KK
          : LagnLong.QQ}
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
        {langs.map((el) => (
          <MenuItem onClick={() => handleClose(el.value)} key={el.value}>
            {el.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default memo(SwitchLang);
