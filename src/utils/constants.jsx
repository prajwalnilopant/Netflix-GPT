export const LOGO = "https://cdn.prod.website-files.com/64ea57571d50b02423c4505d/64fb2d9af4bc13f2456f85eb_netflix%20logo%20png.png";
export const USER_AVATAR =
  "https://occ-0-621-616.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/f83b20c7-a289-4aac-bb47-c08a9fec4de7/web/US-en-20250507-TRIFECTA-perspective_d3be4350-0a72-4b05-929b-bc37b3466a11_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
