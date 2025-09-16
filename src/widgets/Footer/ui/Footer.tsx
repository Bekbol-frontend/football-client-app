import { memo } from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { routePaths } from "@/shared/config/routeConfig";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTranslation } from "react-i18next";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";

function Footer() {
  const { t } = useTranslation();
  const { isDesktop } = useResponsive();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Container>
          <Grid container spacing={isDesktop ? 2 : 3}>
            <Grid size={isDesktop ? 3 : 12}>
              <Link to={routePaths.homePage} className={styles.footerLogo}>
                <img src="/logo.svg" alt="logo" />
              </Link>
            </Grid>
            <Grid size={isDesktop ? 3 : 12}>
              <Stack alignItems="center" direction="row" gap={1} sx={{ mb: 1 }}>
                <LocalPhoneIcon sx={{ color: "#fff" }} />
                <a href="tel:+998612221234" className={styles.footerLink}>
                  +998 61 222 12 34
                </a>
              </Stack>
              <Stack alignItems="center" direction="row" gap={1}>
                <LocalPhoneIcon sx={{ color: "#fff" }} />
                <a href="tel:+998612221234" className={styles.footerLink}>
                  +998 61 222 12 34
                </a>
              </Stack>
            </Grid>
            <Grid size={isDesktop ? 3 : 12}>
              <Stack alignItems="center" direction="row" gap={1} sx={{ mb: 1 }}>
                <EmailIcon sx={{ color: "#fff" }} />
                <a href="#" className={styles.footerLink}>
                  nfo@kkfa.uz
                </a>
              </Stack>
              <Stack alignItems="center" direction="row" gap={1}>
                <EmailIcon sx={{ color: "#fff" }} />
                <a href="#" className={styles.footerLink}>
                  uzkkfa@exat.uz
                </a>
              </Stack>
            </Grid>
            <Grid size={isDesktop ? 3 : 12}>
              <Stack alignItems="center" direction="row" gap={1} sx={{ mb: 2 }}>
                <FmdGoodIcon sx={{ color: "#fff" }} />
                <Typography variant="body1" className={styles.footerLink}>
                  Nukus City, 47
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <a href="#" className={styles.socialLink}>
                  <TelegramIcon sx={{ color: "#fff" }} fontSize="small" />
                </a>
                <a href="#" className={styles.socialLink}>
                  <InstagramIcon sx={{ color: "#fff" }} fontSize="small" />
                </a>
                <a href="#" className={styles.socialLink}>
                  <YouTubeIcon sx={{ color: "#fff" }} fontSize="small" />
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.footerBottom}>
        <Container>
          <Typography sx={{ color: "#fff" }}>
            © {new Date().getFullYear()} {t("all rights reserved")}
          </Typography>
        </Container>
      </div>
    </footer>
  );
}

export default memo(Footer);
