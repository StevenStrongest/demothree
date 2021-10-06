import telegram from 'assets/images/footer/telegram.png';
import twitter from 'assets/images/footer/twitter.png';
import medium from 'assets/images/footer/medium.png';
import discord from 'assets/images/footer/discord.png';
import instagram from 'assets/images/footer/instagram.png';
import youtube from 'assets/images/footer/youtube.png';


export default {
  document:[
    {
      link: "/",
      content: "Whitepaper"
    },
    {
      link: "/",
      content: "Token metrics"
    },
    {
      link: "/",
      content: "Privacy Policy"
    }
  ],
  learnmore:[
    {
      link: "/",
      content: "Overview"
    },
    {
      link: "/",
      content: "Features"
    },
    {
      link: "/",
      content: "Market overview"
    },
    {
      link: "/",
      content: "Roadmap"
    },
    {
      link: "/",
      content: "Meme contest"
    }
  ],
  social:[
    {
      row:[
        {
          icon: telegram,
          text: "telegram",
          link: "/"
        },
        {
          icon: twitter,
          text: "twitter",
          link: "/"
        },
        {
          icon: medium,
          text: "medium",
          link: "/"
        },
      ],
    },
    {
      row:[
        {
          icon: discord,
          text: "discord",
          link: "/"
        },
        {
          icon: instagram,
          text: "instagram",
          link: "/"
        },
        {
          icon: youtube,
          text: "youtube",
          link: "/"
        },
      ]
    }
  ]
};
