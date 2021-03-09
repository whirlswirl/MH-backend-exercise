## React SSR

Depending on the requirements of the given project I would suggest using either **Next.js** or **Gatsby** (For Vue, Nuxt.js is possible as well). The more the project leans towards an application with lots of datafetching and user interaction, the balance moves towards Next.js. If the main goal is to deliver content, the choice should probably be Gatsby (SSG).

SSR has three key benefits over CSR that make SSR a crucial choice for projects in the media landscape, where traffic & attention is the highest good.

- Performance


  In most cases it will be more performant than CSR. The "first contentful paint" score will be significantly higher on a median consumer device with a lower internet speed, keeping the user from switching to another source of incoming information.

- Caching


  Because the server is serving HTML pages, browsers can cache the HTML structure of the page, along with static assets, boosting performance for the client and lowering impact on the server.

- SEO & interface with Social Media


  If the goal of the website is to reach as many people as possible using marketing strategies including SEO, SSR is essential. SSR sites are crawled easily, even by non-js crawlers. This benefits search engine ranking and provides metadata to social media channels.

**Glossary**

- SSR: Server Side Rendering
- CSR: Client Side Rendering (default SPA)
- SSG: Static Site Generation
