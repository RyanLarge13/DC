import {
  Other,
  Ecommerce,
  Portfolio,
  Desktop,
  Mobile,
  LandingPage,
} from "../public/assets/index";

export default [
  {
    id: 1,
    title: "Portfolio",
    img: Portfolio,
    desc: "Need a new portfolio to showcase your skills? Showoff your business or advertize a new amazing product that you offer? Check this out",
    priceRange: "$",
    about:
      "A portfolio website will end up being your greatest achievements, your highlighter of amazing feats, an advertisement made specifically for you that reals people into your greatness and tells them a story about what makes you the best fit!",
    details: [
      {
        title: "Pricing",
        desc: {
          text: "Pricing varies depending on the complexity and interactivity of your new porfolio. in almost all cases a your new website will not exceed $200 this will include functionality such as",
          items: [
            "personal email forms",
            "your own logo",
            "downloadable resumes",
            "hero sections",
            "skills page",
            "experience page",
            "two custom pages",
            "about you page",
            "& a contact page",
          ],
          text2:
            "Please note all portfolio sites are completely customizable and prices varíe discriminatly",
        },
      },
      {
        title: "Custom Domains",
        desc: {
          text: "There are two ways to impliment custom domains, you can purchase a custom domain on your own for me to link to your website or leave the entire process up to me. Good places to find custom domains are websites such as ",
          items: ["Google domains", "GoDaddy"],
        },
      },
      {
        title: "Customization",
        desc: {
          text: "Here at DC I have the need and strong desire to connect with all of my clients first hand. In order to deliver a product that meets their needs we have much to go over. Good conversation is key to a good product. When you purchase a portfolio website we will go over everything that is needed for you to achieve your desired outcome or if you are most for thought leave it up to me and I will deliver you something extraordinary. We will go over things such as ",
          items: [
            "color themes",
            "logo ideas",
            "pages/layouts",
            "functionality & integrations",
            "animations & design",
            "ccontent",
            "& more",
          ],
        },
      },
    ],
    features: [
      {
        title: "What's Included?",
        list: [
          {
            title: "Email & Contact Forms",
            desc: "Do you want a personal email people can connect with you on? Let's link you up and give you a means to connect with people!",
          },
          {
            title: "5 pages",
            desc: "Up to 5 pages of awesome! They can be the default page types or completely customized.",
          },
        ],
      },
    ],
    instructions: [
      {
        title: "Step 1",
        instruction:
          "Add this product to your cart if you are interested in learning more, and building an amazing portfolio for yourself!",
        btns: [{ text: "Add to Cart", link: "" }],
      },
      {
        title: "Step 2",
        instruction:
          "Once in your cart, go to checkout your new product! I will get in contact with you immediately!! We will go over all the things in an organized way to make sure your dream is realized. This conversation is completely free of charge",
        btns: [{text: "Add & View Cart", link: ""}],
      },
      {
        title: "Step 3",
        instruction:
          "If you have decided to go through with your new portfolio creation a new order will immediately appear in your portfolio to complete the checkout process",
        btns: [],
      },
      {
        title: "Step 4",
        instruction:
          "That is it! Sit back and relax until your portfolio is complete. A time frame will be avaliable throughout the process to check up on your application and you can view, edit, comment & adjust while I create it!!",
        btns: [],
      },
    ],
    examples: [
      { title: "Tech Portfolio for Ryan Large", img: "", quote: "", link: "" },
    ],
  },
  {
    id: 2,
    title: "Mobile App",
    img: Mobile,
    desc: "Why are there no apps out there that give you exactly what you need? Because you have yet to find me",
    priceRange: "$ - $$$",
  },
  {
    id: 3,
    title: "Desktop App",
    img: Desktop,
    desc: "Are you looking for a desktop version to your current web app, or maybe you are in need of a personal unique applicaiton dedicated to your specific ideas",
    priceRange: "$ - $$",
  },
  {
    id: 4,
    title: "E Commerce",
    img: Ecommerce,
    desc: "Start selling your dreams and building your business empire to its fullest with a custom E commerce website for your new or established startup business",
    priceRange: "$ - $$",
  },
  {
    id: 5,
    title: "Landing page",
    img: LandingPage,
    desc: "You need to attract customers and clients to your site, there is no better way to get starting ringing in the traffic by deploying a beautiful and attractive landing page for your dream",
    priceRange: "$",
  },
  {
    id: 6,
    title: "Others",
    img: Other,
    desc: "Total custom? Are you interested in testing DC to see what we are capable of? Or maybe the product you are looking for is not listed. Please check out this product for an in depth conversation to get started on building your new project",
    priceRange: "$ - $$$",
  },
];
