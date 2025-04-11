import { AssetOption, Collection } from "src/types";

export const formatNameAsTag = (name: string) =>
  name.toLowerCase().replace(" ", "-");

const formatId = (id: number): number | string => {
  return id < 10 ? `0${id}` : id;
};

const formatUrl = (url: string): string => {
  const sanitizedUrl = url.replace("ñ", "n");
  return encodeURIComponent(sanitizedUrl)
    .replace(/%2F/g, "/")
    .replace(/%3A/g, ":");
};

//used to format slimes item src
export const formatSrc = ( 
  option: AssetOption,
  slime: Collection,
  highResPath: boolean,
  isVariation?: boolean
): string => {

  //low res slime
  if (!option.isTinyDenise && !highResPath) {
    return `${process.env.CLOUDFLARE_STORAGE}/${option.lowResPath}/${isVariation ? "dark-" : ""}${slime.tag}.${option.extension}`;
  }
  //high res slime
  if (!option.isTinyDenise && highResPath) {
    let ext = option.extension
    if (option.name === "Original Artwork") ext = "png";
    
    return `${process.env.CLOUDFLARE_STORAGE}/${option.highResPath}/${isVariation ? "dark-" : ""}${slime.tag}.${ext}`;
  }

  //tiny denise assets 
  const prefix = `${process.env.CLOUDFLARE_STORAGE}/${
    highResPath ? option.highResPath : option.lowResPath
  }`; 

  const formattedID = formatId(slime.id + 1)
  const tinyPath = `${process.env.CLOUDFLARE_STORAGE}/${option.path}/${formattedID}_${slime.name}` 
 

  switch (option.name) {
    case "Original Artwork":
      // images/tiny-assets/01_Scum/PFPs/PFP_01.png
      return formatUrl(
        `${tinyPath}/PFPs/PFP_${formattedID}.png`
      );
      case "PFP":
        // images/tiny-assets/01_Scum/PFPs/PFP_01 (1).png
        return formatUrl(
        `${tinyPath}/PFPs/PFP_${formattedID} (1).png`
        );

    case "X Wallpaper":
      // 01_Scum_BG Twitter Banner.png
      // 01_Scum_OG_BG Twitter Banner.png
      return formatUrl(
        `${tinyPath}/${formattedID}_${
          slime.name
        }_${isVariation ? "OG_" : ""}BG Twitter Banner.png`
      );

    case "Mobile Wallpaper":
      //01_Scum_BG Phone Wallpaper.png
      //01_Scum_OG_BG Phone Wallpaper.png
      return formatUrl(
        `${tinyPath}/${formattedID}_${
          slime.name
        }${isVariation ? "_OG_BG" : slime.id === 0 ? "_BG" : ""} Phone Wallpaper.png`
      );
    default:
      return formatUrl(
        `${prefix}/PFP_${formattedID}.png`
      );
  }
};
