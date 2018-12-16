export class Personalia {
  name: string;
  email: string;
  socialMedia: {
    username?: string,
    media: string,
    url: string
  }[];
  description: string;
  background?: string;
}
