/* Edit this file to manage the Team page.
   Member photos: save in /public/team/ and set photo: "/team/name.jpg". Without a photo, initials are shown.
   Culture photos: save in /public/culture/ and set src: "/culture/office-1.jpg". */

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  short: string; // one line, shown on the card
  bio: string; // shown when the card is opened
  skills: string[];
  funFact?: string;
  email?: string;
  linkedin?: string;
};

export type CulturePhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export const team: TeamMember[] = [
  {
    slug: "founder",
    name: "Founder Name",
    role: "Founder & Director",
    photo: "",
    short: "Leads strategy and client relationships.",
    bio: "Write 2 to 4 lines here about experience, what this person does at Nirmata Digital, and what clients can expect from working with them.",
    skills: ["Strategy", "Growth", "Client success"],
    funFact: "Add something personal here, like a hobby or favourite place.",
    email: "",
    linkedin: "",
  },
  {
    slug: "web-lead",
    name: "Web Lead Name",
    role: "Head of Web Development",
    photo: "",
    short: "Builds fast, clean websites and web apps.",
    bio: "Write a short bio here.",
    skills: ["Next.js", "UI design", "SEO"],
  },
  {
    slug: "content-lead",
    name: "Content Lead Name",
    role: "Head of Content & Video",
    photo: "",
    short: "Turns ideas into videos, posts and stories.",
    bio: "Write a short bio here.",
    skills: ["Video editing", "Copywriting", "Social media"],
  },
  {
    slug: "marketing-lead",
    name: "Marketing Lead Name",
    role: "Growth Marketer",
    photo: "",
    short: "Runs campaigns that bring in real leads.",
    bio: "Write a short bio here.",
    skills: ["Meta Ads", "Google Ads", "Analytics"],
  },
];

/* Photos of the office, events, work days */
export const companyPhotos: CulturePhoto[] = [
  { src: "", alt: "Our office", caption: "Our workspace" },
  { src: "", alt: "Team meeting", caption: "Weekly planning" },
  { src: "", alt: "Client workshop", caption: "Working with clients" },
];

/* Photos of the people: celebrations, lunches, trips, shoots */
export const employeePhotos: CulturePhoto[] = [
  { src: "", alt: "Team lunch", caption: "Team lunch" },
  { src: "", alt: "Festival celebration", caption: "Festival celebration" },
  { src: "", alt: "Video shoot day", caption: "Shoot day" },
  { src: "", alt: "Team outing", caption: "Team outing" },
];
