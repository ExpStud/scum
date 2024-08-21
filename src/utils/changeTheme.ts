
import { Theme } from "@types";
import { theme } from "src/constants";

export const changeTheme = (theme: Theme) => {

  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    htmlElement.setAttribute("color-theme", theme.color);
    htmlElement.style.setProperty('--primary', theme.primary);
    htmlElement.style.setProperty('--secondary', theme.secondary);
    htmlElement.style.setProperty('--tertiary', theme.tertiary);
    htmlElement.style.backgroundColor = theme.primary; // Set the background color
  }
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
