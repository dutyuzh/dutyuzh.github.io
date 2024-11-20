# Portfolio

This project allows users to showcase their development portfolio. This README will guide you through setting up, running, and developing the project locally. Additionally, it includes instructions for configuring a GitHub Action to automatically push the project to gh-pages barnch and host it on your own GitHub username .io domain.

[Click Me For Demo](https://dutyuzh.github.io/)

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
3. [Building the Project](#building-the-project)
4. [Github Action to Deploy to GitHub Pages](#github-action-to-deploy-to-github-pages)
5. [Hosting On GitHub Pages](#hosting-on-github-pages)

## Prerequisites

Before you can start exploring the magic, make sure you have the following installed on your local development machine:

- **Node.js** (v22.x or higher): [Download Node.js](https://nodejs.org/en/download/)
- **npm** Comes with Node.js. 


## Installation

1. Clone the Repository
To get started, clone the project repository:

`git clone https://github.com/dutyuzh/dutyuzh.github.io.git`
`cd dutyuzh.github.io`

2. Install Dependencies
Run the following command to install all necessary dependencies:

`npm install`

## Running the Project
To run the project in development mode with hot reloading:

`npm run dev`

This command starts a local development server at http://localhost:3000. As you work on your portfolio, any changes to your code will automatically refresh the page for you.

## Building the Project
To build the project for production:

`npm run build`

This will generate an optimized production build. You can then start the project in production mode using:

`npm start`

This will host the production build at http://localhost:3000.

## GitHub Action to Deploy to GitHub Pages

To set up continuous deployment with GitHub Actions, follow these steps:

1. Create a .github/workflows directory in your project if it doesn’t exist.
2. Inside the .github/workflows directory, create a file named deploy.yml:
3. You can google on how to set up a GitHub DEPLOY_TOKEN in git for project.

```
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches:
      - main  # Trigger deployment on push to the 'main' branch
    # Optional: You can add more events like pull request merges or tag creation

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v3
    
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '22.11.0'  # Make sure to match the Node.js version you're using
    
    - name: Install dependencies
      run: npm install
    
    - name: Build Next.js
      run: npm run build

    - name: Set git config
      run: |
        git config --global user.name "Your Name"
        git config --global user.email "Your Email"
    
    - name: Deploy to GitHub Pages
      run: |
        git remote set-url origin https://x-access-token:${{ secrets.DEPLOY_TOKEN }}[YOUR GITHUB PROJECT].git
        npm run deploy
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

## Hosting on GitHub Pages
After the GitHub Action successfully runs, your portfolio will be deployed to GitHub Pages, and you can view it by visiting:

`https://<your-username>.github.io/dev-portfolio`

If you'd like to set up a custom domain (like https://your-username.github.io), follow these additional steps:

1. In the gh-pages branch of your repository, create a file named CNAME with your custom domain name inside it.

2. In your GitHub repository settings, under "GitHub Pages," set the source to gh-pages branch.

Now, your portfolio should be hosted and available on your own .io domain.


#### Now you're ready to host your own portfolio in GitHub Pages 🏰✨
