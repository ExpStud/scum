
import { Theme } from "@types";
import { theme } from "src/constants";

export const changeTheme = (theme: Theme) => {
  console.log("THEME ", theme)
  document.querySelector("html")?.setAttribute("color-theme", theme.color);
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
