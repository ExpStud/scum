
import { Theme } from "@types";

export const changeTheme = (theme: Theme) => {
  document.querySelector("html")?.setAttribute("color-theme", theme.color);
};
