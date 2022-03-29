<h1 align="center">
  <br>
  <a href="https://ollyrowe.github.io/algorithms/"><img src="https://raw.githubusercontent.com/ollyrowe/algorithms/master/website/public/android-chrome-192x192.png" alt="Algorithms" width="200"></a>
  <br>
  Algorithms
  <br>
</h1>

<h4 align="center">A collection of computing algorithms</h4>

<p align="center">
  <a href="https://ollyrowe.github.io/algorithms/">
    <img
      src="https://img.shields.io/website?down_color=%23F50057&down_message=offline&up_color=%2300BFA6&up_message=online&url=https%3A%2F%2Follyrowe.github.io%2Falgorithms%2F"
      alt="Website Status"
    />
  </a>
  <a href="https://github.com/ollyrowe/algorithms/releases">
    <img
      src="https://img.shields.io/github/v/release/ollyrowe/algorithms?color=%2300B0FF"
      alt="Latest Release"
    />
  </a>
    <a href="https://github.com/ollyrowe/algorithms/graphs/contributors">
    <img
      src="https://img.shields.io/github/contributors/ollyrowe/algorithms?color=%2300BFA6"
      alt="Contributors"
    />
  </a>
  <a href="https://github.com/ollyrowe/algorithms/issues">
    <img
      src="https://img.shields.io/github/issues/ollyrowe/algorithms?color=%23F9D726"
      alt="Issues"/>
  </a>
  <a href="https://img.shields.io/github/license/ollyrowe/algorithms.svg">
    <img
      src="https://img.shields.io/github/license/ollyrowe/algorithms.svg"
      alt="License"/>
  </a>
</p>

<p align="center">
  <a href="#-about">About</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-request-feature">Request Feature</a> •
  <a href="#-changelog">Changelog</a> •
  <a href="#-contribute">Contribute</a> •
  <a href="#-license">License</a>
</p>

## 💡 About

This project compiles a list of common computer science algorithms, demonstrating their implementation in a range of modern programming languages. Currently, the following languages are supported:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Java](https://www.java.com/en/)
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Python](https://www.python.org/)

## 🚀 Getting Started

### Cloning

To clone this repository, run the following command.

```bash
git clone https://github.com/ollyrowe/algorithms.git
```

To contribute to this project, you must first make a fork of the repository and then clone the fork.

```bash
git clone https://github.com/<your_username>/algorithms.git
```

### Installation

After cloning the repository, run the following command to install the required dependencies.

```bash
npm install
```

### Algorithms

All resources held within this project can be seen from the [website](https://ollyrowe.github.io/algorithms/). This site hosts an up-to-date view of all algorithms, data structures and additional general resources held within this repository.

### Website

The website is built with the [Vue](https://vuejs.org/) framework with support from the [Buefy](https://buefy.org/) component library.

The relevant steps to setting up and configuring the development environnement for the website can be seen below.

#### Development

The source code for the website can be found within the `./website` folder of this repository.

After cloning the repository, step into the website directory and install the dependencies.

```bash
cd website
npm install
```

To run the local development environment, the following command can be used.

```bash
npm run serve
```

To re-compile the website's content, the following command can be ran.

```bash
npm run compile-content
```

> Note that this command is automatically ran when running `npm run serve`

This command parses the resources held within the root directories of this repository to a JSON file which is then read by the hosted site. Currently, this script accounts for the following folders and file signatures which supports resource folders and a set of files for each language implementation in addition to a general information file.

```bash
├── algorithms
│   ├── <resource>
│   │   ├── <resource>-info.txt
│   │   ├── <resource>.cs
│   │   ├── <resource>.java
│   │   ├── <resource>.js
│   │   ├── <resource>.py
│   │   ├── <resource>.ts
├── data-structures
│   ├── ...
└── general
    └── ...
```

#### Linting

The development environnement requires the installation of both [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). If you are using Visual Studio Code, the supporting extensions should also be installed and configured.

To lint and fix files from the command line, the following command can be used.

```bash
npm run lint
```

#### Build

A production build of the website can be compiled with the following command.

```bash
npm run build
```

#### CI / CD

This project makes use of [GitHub Actions](https://github.com/features/actions) to enable continuous integration and deployment of new features into the master branch which is automatically deployed to [GitHub Pages](https://pages.github.com/).

## ✨ Request Feature

To request a new algorithm or website feature, feel free to submit an issue. Pull requests are also welcome.

Quick links:

- [Request Feature](https://github.com/ollyrowe/algorithms/issues/new?labels=enhancement)
- [Report Bug](https://github.com/ollyrowe/algorithms/issues/new?labels=bug)

## 📈 Changelog

The project changelog can be found [here](https://github.com/ollyrowe/algorithms/blob/master/CHANGELOG.md).

## 💬 Contribute

### Getting Started

To contribute to the project, feel free to make a fork and submit a pull request. This project makes use of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to enable automated [Semantic Versioning](https://semver.org/).

### Contributors

<a href = "https://github.com/ollyrowe/algorithms/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=ollyrowe/algorithms"/>
</a>

## 🧾 License

This project is licensed under the terms of the **MIT** license.
