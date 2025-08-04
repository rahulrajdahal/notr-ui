import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notr UI",
  description: "UI kits for Notr app",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "Core",
        items: [{ text: "Colors", link: "/core/colors" }],
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Debounce Input", link: "/components/debounce-input" },
          { text: "Input", link: "/components/input" },
          { text: "Password Input", link: "/components/passwordInput" },
          { text: "Pill", link: "/components/pill" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/rahulrajdahal/notr-ui" },
    ],
  },
});
