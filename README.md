# Hacker News Comments
It contains two module, **web and server.**

## Web
It contains the client side code written in Vue.js and in Typescript.

Instructions about project setup and deployment can be found [here](web/README.md).

## Server
It contains the server side code written in Express and in Typescript.

It uses mongodb for storing comments.

Instructions about project setup and deployment can be found [here](server/README.md).

## Technology Used
**Web:**

- [Vue.js](https://vuejs.org/) - Web Framework for building user interfaces
- [Typescript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types
- [Vue Router](https://router.vuejs.org/) - Router for Vue.js
- [Vuex](https://vuex.vuejs.org/) - State management library for Vue.js applications
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Ky](https://github.com/sindresorhus/ky) -  HTTP client based on the browser Fetch API

**Server:**

- [Express](https://expressjs.com/) - Minimalist web framework for Node.js
- [Typescript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types.
- [Mongoose](https://github.com/Automattic/mongoose) - Mongoose is a MongoDB object modeling tool
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) - JsonWebToken library for authorization

## Future Improvement
- Implement rate limiter, caching in the server.
- Improve page responsiveness.
- Implement server side rendering.
- Improve error handling.
