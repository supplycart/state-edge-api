import type { Context } from "https://edge.netlify.com";

const states = [
  {
    "country": "Malaysia",
    "abbr": "JHR",
    "name": "Johor"
  },
  {
    "country": "Malaysia",
    "abbr": "KDH",
    "name": "Kedah"
  },
  {
    "country": "Malaysia",
    "abbr": "KTN",
    "name": "Kelantan"
  },
  {
    "country": "Malaysia",
    "abbr": "KL",
    "name": "Kuala Lumpur"
  },
  {
    "country": "Malaysia",
    "abbr": "LBN",
    "name": "Labuan"
  },
  {
    "country": "Malaysia",
    "abbr": "MLK",
    "name": "Melaka"
  },
  {
    "country": "Malaysia",
    "abbr": "NSN",
    "name": "Negeri Sembilan"
  },
  {
    "country": "Malaysia",
    "abbr": "PHG",
    "name": "Pahang"
  },
  {
    "country": "Malaysia",
    "abbr": "PRK",
    "name": "Perak"
  },
  {
    "country": "Malaysia",
    "abbr": "PLS",
    "name": "Perlis"
  },
  {
    "country": "Malaysia",
    "abbr": "PNG",
    "name": "Penang"
  },
  {
    "country": "Malaysia",
    "abbr": "PJY",
    "name": "Putrajaya"
  },
  {
    "country": "Malaysia",
    "abbr": "SBH",
    "name": "Sabah"
  },
  {
    "country": "Malaysia",
    "abbr": "SWK",
    "name": "Sarawak"
  },
  {
    "country": "Malaysia",
    "abbr": "SGR",
    "name": "Selangor"
  },
  {
    "country": "Malaysia",
    "abbr": "TRG",
    "name": "Terengganu"
  }];

export default async (request: Request, context: Context) => {
  return context.json({ data: states });
};