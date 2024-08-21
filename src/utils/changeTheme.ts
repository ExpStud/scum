
import { Theme } from "@types";
import { theme } from "src/constants";

export const changeTheme = (theme: Theme) => {
  document.querySelector("html")?.setAttribute("color-theme", theme.color);
  // document.documentElement.style.setProperty('--color', theme.color);
  document.documentElement.style.setProperty('--primary', theme.primary);
  document.documentElement.style.setProperty('--secondary', theme.secondary);
};

export const getTheme = (pathname:string) => {
  let initialTheme = theme[0];

  if (pathname.startsWith("/slimes")) {
    initialTheme = theme[3];
  } else {
    switch (pathname) {
      case "/maquina":
        initialTheme = theme[2];
        break;
      case "/axolotl":
        initialTheme = theme[1];
        break;
      default:
        initialTheme = theme[0];
    }
  }

  return initialTheme;
}
