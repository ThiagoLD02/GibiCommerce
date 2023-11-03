import { md5 } from "js-md5";
import { api } from "../axios";

export async function GetRequest(endpoint: string) {
  const publicKey = process.env.publickey;
  const privateKey = process.env.privatekey;
  const timestamp = new Date().getTime().toString();

  const privateKeyEncrypted = privateKey
    ? md5(timestamp + privateKey + publicKey)
    : "";

  const url = `${endpoint}?ts=${timestamp}&apikey=${publicKey}&hash=${privateKeyEncrypted}`;
  //            comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    alert("Error in get request for: " + endpoint);
    console.log(error);
  }
}

interface MarvelComicData {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
  };
  etag: string;
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: Variant[];
  collections: Collection[];
  collectedIssues: CollectedIssue[];
  dates: DateItem[];
  prices: Price[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: Image[];
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: CreatorItem[];
  };
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: CharacterItem[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: StoryItem[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventItem[];
  };
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface Collection {
  resourceURI: string;
  name: string;
}

interface CollectedIssue {
  resourceURI: string;
  name: string;
}

interface DateItem {
  type: string;
  date: Date;
}

interface Price {
  type: string;
  price: number;
}

interface Image {
  path: string;
  extension: string;
}

interface CreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface CharacterItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface EventItem {
  resourceURI: string;
  name: string;
}
