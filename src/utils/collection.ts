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
  highResPath: boolean
): string => {
  if (!option.isTinyDenise) {
    return `${process.env.CLOUDFLARE_STORAGE}/${option.lowResPath}/${slime.tag}.${option.extension}`;
  }

  const prefix = `${process.env.CLOUDFLARE_STORAGE}/${
    highResPath ? option.highResPath : option.lowResPath
  }`;

  switch (option.name) {
    case "Original Artwork":
      return formatUrl(
        `${prefix}/original/PFP_${formatId(slime.id + 1)}.${option.extension}`
      );
    case "X Wallpaper":
      return formatUrl(
        `${prefix}/banner/${formatId(slime.id + 1)}_${
          slime.name
        }_BG Twitter Banner.${option.extension}`
      );
    case "PFP":
      return formatUrl(
        `${prefix}/pfp/PFP_${formatId(slime.id + 1)}.${option.extension}`
      );
    case "Mobile Wallpaper":
      return formatUrl(
        `${prefix}/mobile/${formatId(slime.id + 1)}_${
          slime.name
        } Phone Wallpaper.${option.extension}`
      );
    default:
      return formatUrl(
        `${prefix}/PFP_${formatId(slime.id + 1)}.${option.extension}`
      );
  }
};
