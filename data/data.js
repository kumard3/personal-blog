const rowReverse = `flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse`;
const row = `flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row`;

export const data = [
    {
      name: "DevBlogs ",
      description: "DevBlogs is a Next.Js site, where i used to write blogs about web-development and software-development.  If you want to learn something, do check this website.",
      href:`https://cyphen-blog.vercel.app`,
      img: "/Group1.jpg",
      animation:"zoom-in-right",
      class:row
    },
    {
      name: "DevUi",
      description: "DevUI is a free, open-source collection of UI components and templates based on Tailwind CSS.",
      href:`https://dev-ui.vercel.app/`,
      img: "/Group2.jpg",
      animation:"zoom-in-left",
      class:rowReverse
    },
    {
      name: "A-Lab",
      description: "Virtual Platform designed to develop your engineering skills through lab work . Through this approach, Virtual Lab aims to ease the learning process by involving students in practical activities carried out in a virtual laboratory using technologies such as 3D and Virtual Reality.",
      href:`https://a-lab.vercel.app/`,
      img: "/Group3.jpg",
      animation:"zoom-in-right",
        class:row
    },
    {
      name: "Expert Dental",
      href:`https://www.expertdental.co.in/`,
      description: "Expert Dental in Patna offers a host of treatments and cures for a wide range of dental ailments faced by the patients. Few of the dental procedures they offer range from inducing fillings and repairs in the tooth and many other dental services.",
      img: "/Group4.jpg",
      animation:"zoom-in-left",
      class: rowReverse
    },
  ];