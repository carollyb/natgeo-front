<h1 align="center">NatGeo - Webpage</h1>
<p align="center">
  <i>NatGeo helps organizing magazine issues digital files, allowing creation, deletion and searching magazine issues by multiple parameters</i><br />
  <i>🚧 In progress 🚧</i><br />
</p>
<p>
This project was created as a study case to apply some topics I am interested in studying, such as: 
</p>
<ul>
  <li>AWS S3 Bucket and aws-sdk</li>
  <li>Next</li>
  <li>Accessibility</li>
</ul>
Check #development section to see a full list of design patterns, technologies and libraries used

<details>
<summary><b>Contents</b></summary>


- [Running the project](#running-the-project)
  - [Locally](#locally)
- [Development](#development)
  - [Technologies](#technologies)
  - [State Management](#state-management)
    - [S3 Bucket](#s3-bucket)
  - [API](#api)
  - [Libraries & Frameworks](#libraries--frameworks)
- [Backend](#backend)
- [Wishlist](#wishlist)
</details><br />

## Running the project

### Locally

> Have Node (latest stable version) installed on your machine.

Clone the repo:
```bash
git clone https://github.com/carollyb/natgeo-front.git
```

Go to directory:
```bash
cd natgeo-front
```

Install projects dependencies
```bash
npm i
```

Run
```bash
npm run dev
```

## Development

### Technologies
> In progress

### State Management
> Zustand - global states

#### S3 Bucket
> Storing images and files to S3 bucket via aws-sdk

### API
> Domain Folder

### Libraries & Frameworks
> React with Typescript, Next, AWS SDK, ChakraUI, Zustand
## Backend
> [API](https://github.com/carollyb/natgeo)
## Wishlist
<ul>
  <li>Upload issues via aws-sdk through an authenticated form page</li>
  <li>Display issues files with react-pdf and issues covers from s3 bucket. PDF files also stored in s3 bucket</li>
  <li>Typescript paths alias</li>
  <li>Accessibility with HeadlessUI</li>
</ul>