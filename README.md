
# ✅ Task Manager

<p align="center">
  <a href="#-description">Description</a>&nbsp;|&nbsp;
  <a href="#-deploy">Deploy</a>&nbsp;|&nbsp;
  <a href="#-tech-stack">Tech Stack</a>&nbsp;|&nbsp;
  <a href="#-environment-variables">Environment Variables</a>&nbsp;|&nbsp;
  <a href="#-install-and-scripts">Install & Scripts</a>&nbsp;|&nbsp;
  <a href="#-contribution">Contribution</a>&nbsp;|&nbsp;
  <a href="#-license">License</a>
</p>

<br>

<p align="center">
  <img alt="Task Manager Thumbnail" src="./frontend/assets/project_thumbnail.png" width="100%" />
</p>


## 📙 Description

Task Manager is a user-friendly task manager app that helps you create, edit, remove, and search tasks effortlessly. Store all your tasks securely in a database for easy access across devices. Stay organized, increase productivity, and achieve your goals with Task Manager!


## 💻 Deploy

- [Click here](https://DEPLOY/) to go the live demo {FIX LINK}


## ⚙️ Functionality

- Create a new task
- Edit an existing task
- Remove an existing task
- Search tasks by title matching


## 🛠 Tech Stack

All the application was developed with TypeScript

**Front-end:**
- Vite
    - React
        - Redux & Redux Toolkit
        - React Hook Form
        - React Router DOM
        - Zod
        - Lodash
            - Debounce
        - Material UI

**Back-end:**
- [AceBase](https://github.com/appy-one/acebase)
- Express.js
    - Zod 


## 🔢 Environment Variables

This web app two three Environment Variables. Create a `.env` file at the root of `/backend` and `/frontend` with the following vars:

**Front-end(.env)**
```bash
    VITE_TASKS_BASE_URL
```
**Back-end(.env)**
```bash
    ALLOWED_ORIGINS
```

All variables are type string


## 👨‍💻 Install and Scripts

Download and setup the environment variables in a ```.env``` file in the frontend and backend folder

**Go to the backend folder:**

Install dependecies on NPM:

```bash
  pnpm install
```

Run local server:
```bash
  pnpm dev
```

Format files with ESLint:
```bash
  pnpm format
```

**Go to the frontend folder:**

Install dependecies on NPM:

```bash
  pnpm install
```

Run local server:
```bash
  pnpm dev
```

Format files with ESLint:
```bash
  pnpm format
```


## 👥 Contribution

If you'd like to contribute with to project, simply open up an issue or Pull Request.


## 🔑 License

[MIT](https://choosealicense.com/licenses/mit/)

