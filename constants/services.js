import {
  Dbmaint,
  Upgrades,
  Design,
  Debug,
  Prettyify,
} from "../public/assets/index";

export default [
  {
    title: "DB maintenance",
    rank: 2,
    priceRange: "$-$$$",
    img: Dbmaint,
    desc: "Managing a database or backend system can be time consuming and taxing on an already hard working person or business. Allow me to take on your burden so you can focus on the more important things.",
    link: "/services/dbmaint",
  },
  {
    title: "Upgrades",
    rank: 1,
priceRange: "$-$$",
    img: Upgrades,
    desc: "Are you itching for a new feature to integrate into your application or website, you do not have the time to do it yourself? Read more about this service here.",
    link: "",
  },
  {
    title: "Designing",
    rank: 1,
priceRange: "$-$$",
    img: Design,
    desc: "From UI/UX, to designing your next big logo for your personal project or business DC will handle the creation and integration of your dreams in a creative & imaginative way.",
    link: "",
  },
  {
    title: "Debugging",
    rank: 1,
priceRange: "$-$$$",
    img: Debug,
    desc: "What about that one feature to your app that just isn't quite working right and causing issues with your users experience or issues on the server or storing data? Hire by the hour to quickly rise to the top and handle those bugs.",
    link: "",
  },
  {
    title: "Prettifying",
    rank: 2,
priceRange: "$",
    img: Prettyify,
    desc: "Clean up your code base, increase speed and efficiency in your application, optimize your server requests and scale to your desires.",
    link: "",
  },
];
