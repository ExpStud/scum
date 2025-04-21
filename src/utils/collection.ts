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

const formatName = (url: string): string => {
  return url.replace("ñ", "n"); 
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
  let tinyPath = `${process.env.CLOUDFLARE_STORAGE}/${option.path}/${formattedID}_${slime.name}` 
  tinyPath = slime.id === 35 ? tinyPath.replace("_Camila", "_Camilla") : tinyPath;
  tinyPath = slime.id === 33 ? tinyPath.replace("_Cucuy", "_Cucoy") : tinyPath; 
 
  //missing pfps: 15 canelo, 22 kahlo,  
  //missing wallpapers: 33 el niño,  

  switch (option.name) {
    case "Original Artwork":
      if (slime.id === 12 || slime.id === 15) {
        return formatUrl(
          `${tinyPath}/PFPs/PFP_50.png`
        );
      }
      if (slime.id === 49) {
        return formatUrl(
          `${tinyPath}/PFPs/PFP_${slime.id}.png`
          );
      }
      return formatUrl(
        `${tinyPath}/PFPs/PFP_${formattedID}.png`
      );

    case "PFP":
      if (slime.id === 12 || slime.id === 15) {
        return formatUrl(
          `${tinyPath}/PFPs/PFP_50-1.png`
        );
      }
      if (slime.id === 49) {
        return formatUrl(
          `${tinyPath}/PFPs/PFP_${slime.id}-1.png`
          );
      }
      if (slime.id >= 14 && slime.id !== 42 ) {
        return formatUrl(
          `${tinyPath}/PFPs/PFP_${formattedID}-1.png`
          );
      }
      return formatUrl(
      `${tinyPath}/PFPs/PFP_${formattedID} (1).png`
      );

    case "X Wallpaper":
      if (slime.id === 42) {
        return formatUrl(
          `${tinyPath}/${formattedID}_${
            slime.name
          } Twitter Banner${isVariation ? "-1" : ""}.png`
        );}
      return formatUrl(
        `${tinyPath}/${formattedID}_${
          formatName(slime.name)
        }_${isVariation ? "OG_" : ""}BG Twitter Banner.png`
      );

    case "Mobile Wallpaper":
      return formatUrl(
        `${tinyPath}/${formattedID}_${
          formatName(slime.name)
        }${isVariation ? "_OG_BG" : slime.id === 0 ? "_BG" : ""} Phone Wallpaper.png`
      );

    default:
      return formatUrl(
        `${prefix}/PFP_${formattedID}.png`
      );
  }
};
