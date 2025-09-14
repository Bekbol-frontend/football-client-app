import type { ComponentProps } from "react";
import styles from "./Section.module.scss";
import { clsx } from "@/shared/lib/clsx";

function Section(props: ComponentProps<"section">) {
  const { children, className = "" } = props;

  return (
    <section {...props} className={clsx([styles.section, className])}>
      {children}
    </section>
  );
}

export default Section;
