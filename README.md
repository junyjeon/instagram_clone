
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
instagram_clone
</h1>
<img src="https://github.com/junyjeon/instagram_clone/assets/98337069/38ec5a8b-1913-472e-be5f-37873ff20c61">

<h3 align="center">📍 Clone Instagram – Experience the Magic!</h3>
<h3 align="center">🚀 Developed with the software and tools below.</h3>
<p align="center">

<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="typescript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=for-the-badge&logo=PostCSS&logoColor=white" alt="" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=for-the-badge&logo=Autoprefixer&logoColor=white" alt="postcss" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white" alt="react-icons" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="@types/node" />

<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style=for-the-badge&logo=SVG&logoColor=black" alt="md" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="autoprefixer" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="styled-components" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="@emotion/react" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="react-dom" />
</p>

</div>


---
## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [📍Overview](#-introdcution)
- [🔮 Features](#-features)
- [⚙️ Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🏎💨 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [🪪 License](#-license)
- [📫 Contact](#-contact)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 📍Overview

GitHub's Instagram Clone project enables users to build an Instagram-like web application from scratch in a short period of time. The project provides a working example of the application and code samples

## 🔮 Feautres

> `[📌  INSERT-PROJECT-FEATURES]`

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## ⚙️ Project Structure

```bash
repo
├── README.md
├── components
│   ├── SearchBar.js
│   └── TabBar.js
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.tsx
│   ├── activity.js
│   ├── api
│   │   └── hello.ts
│   ├── exlpore.js
│   ├── home.js
│   ├── index.js
│   ├── new-post.js
│   ├── profile.js
│   └── search.js
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── next.svg
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   ├── SearchBar.module.css
│   └── globals.css
├── tailwind.config.js
└── tsconfig.json

5 directories, 25 files
```
---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 💻 Modules
<details closed><summary>Api</summary>

| File     | Summary                                                                                                                                                                                                          | Module             |
|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| hello.ts | This code provides an example of how to use Next.js API routes to create a handler function that will respond with a status of 200 and a JSON object containing a name property with the value of ' John Doe ' . | pages/api/hello.ts |

</details>

<details closed><summary>Components</summary>

| File         | Summary                                                                                                                                                                                                                              | Module                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|
| SearchBar.js | This code creates a search bar component that takes a search term and calls a function with the search term when the search button is clicked . It includes an input field and a search button .                                     | components/SearchBar.js |
| TabBar.js    | This code creates a tab bar at the bottom of the page with five icons linking to different pages . It uses React , styled components , and React Icons to create a fixed tab bar with icons for Home , Explore , New Post , Activity | components/TabBar.js    |

</details>

<details closed><summary>Pages</summary>

| File          | Summary                                                                                                                                                                                                                                                         | Module              |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
| activity.js   | This code creates a React component that displays a list of activities , such as likes , comments , follows , and mentions . It also includes a tab bar that allows the user to filter the activities by " You " or " Following " . The activities              | pages/activity.js   |
| profile.js    | This code creates a profile page with a profile header , stats , and post tabs . The profile header includes an avatar , username , bio , and edit profile button . The post tabs allow the user to switch between posts and saved posts . The posts            | pages/profile.js    |
| _app.js       | This code imports the useRouter and useEffect functions from the ' next / router ' and ' react ' libraries respectively , and imports the global stylesheet . It then creates a function called MyApp which takes in a Component and page                       | pages/_app.js       |
| exlpore.js    | This code is a React component that implements an infinite scroll feature and a search bar . It uses the styled - components library to style the components , and the react - infinite - scroll - component library to implement the infinite scroll feature . | pages/exlpore.js    |
| _document.tsx | This code creates a document component that imports HTML , Head , Main , and NextScript components from the Next / Document library . It then returns an HTML element with a language attribute of " en " and contains the Head , Main , and NextScript         | pages/_document.tsx |
| search.js     | This code exports an array of objects containing post titles and content , as well as a function that filters the array based on a query string .                                                                                                               | pages/search.js     |
| index.js      | This code is a React component for a simple Instagram clone using Next.js . It imports the Head component from Next.js and the TabBar component from the components folder . It also sets the title , description , and favicon for the                         | pages/index.js      |
| new-post.js   | This code creates a React component that allows users to upload a photo or video , add a caption , location , and tags , and post it . It also includes a social sharing feature that allows users to share their post on Facebook , Twitter ,                  | pages/new-post.js   |
| home.js       | This code is a React component that displays posts from a dummy API . It includes components for a TabBar , Post , and SearchBar . It also includes styling for the Post , PostHeader , User , Avatar , Username , PostImage ,                                  | pages/home.js       |

</details>

<details closed><summary>Public</summary>

| File        | Summary                                                                                                                                                                                                                   | Module             |
|:------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| next.svg    | This code creates an SVG ( Scalable Vector Graphics ) image with two paths . The image is composed of two shapes , one with a width of 394 and a height of 80 , and the other with a width of 81 and a                    | public/next.svg    |
| vercel.svg  | This code is an SVG ( Scalable Vector Graphics ) image of a black rectangle with a white outline . It contains a path element with a black fill and a viewBox of 283x64 . It is used to create a graphical representation | public/vercel.svg  |
| favicon.ico | This code is an error message indicating that a file could not be decoded because it is not a text or UTF-8 file .                                                                                                        | public/favicon.ico |

</details>

<details closed><summary>Styles</summary>

| File                 | Summary                                                                                                                                                                                                                       | Module                      |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|
| Home.module.css      | This code creates a container with padding , a main section with min - height , padding , flex , display , flex - direction , justify - content , and align - items , a footer with display , flex , padding , border - top   | styles/Home.module.css      |
| globals.css          | This code sets the default font family , text color , and background color for a webpage . It also sets the box - sizing to border - box and changes the color scheme to dark when the user prefers a dark color scheme .     | styles/globals.css          |
| SearchBar.module.css | This code creates a search form with a text input and a search button . The form is displayed as a flex container with items aligned and justified to the center . The text input has a padding of 0.5rem , font size of 1rem | styles/SearchBar.module.css |

</details>
<hr />

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> `[📌  INSERT-PROJECT-PREREQUISITES]`

### 💻 Installation

1. Clone the instagram_clone repository:
```sh
git clone https://github.com/junyjeon/instagram_clone
```

2. Change to the project directory:
```sh
cd instagram_clone
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Using instagram_clone

```sh
npm start
```

### 🧪 Running Tests
```sh
#run tests
```

<hr />

## 🛠 Future Development
- [X] [📌  COMPLETED-TASK]
- [ ] [📌  INSERT-TASK]
- [ ] [📌  INSERT-TASK]


---

## 🤝 Contributing
Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a pull request to the original repository.
Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 🪪 License

This project is licensed under the `[📌  INSERT-LICENSE-TYPE]` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 🙏 Acknowledgments

[📌  INSERT-DESCRIPTION]


---

