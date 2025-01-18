interface HeaderItem {
  name: string;
  href: string;
}

interface EmailItem {
  value: string;
  href: string;
}

type PhoneItem = string;

interface SocialItem {
  icon: string;
  href: string;
}

interface LinkItem {
  name: string;
  links: {
    name: string;
    href: string;
  }[];
}

interface FooterItems {
  email: EmailItem;
  phone: PhoneItem;
  socials: SocialItem[];
  linkItems: LinkItem[];
}

interface Skill {
  name: string;
  logo: string;
}

interface Experience {
  title: string;
  description: string;
}


interface Project {
  imageUrl: string;
  title: string;
  description: string;
  skills: string[];
  sourceCodeUrl: string;
}
interface Certificate {
  imageUrl: string;
  title: string;
  description: string;
}
interface Award {
  imageUrl: string;
  title: string;
  description: string;
}


interface Offer{
  imageUrl:string;
  description: string;

}
interface Hire {
  title: string;
  description: string;
  additionalDescription: string; // New field
}