import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  const posts = [
    {
      id: '1',
      title: 'Setting Up a Development Environment on PC and Mac',
      content: 'To set up a development environment on PC and Mac, follow these steps:',
      instructions: `
        1. Install Node.js: Visit the official Node.js website and download the installer for your operating system. Run the installer and follow the prompts.
      
        2. Install a Code Editor: Choose a code editor such as Visual Studio Code, Sublime Text, or Atom. Download and install the code editor of your choice.
      
        3. Install Git: Git is a version control system widely used in the development community. Download and install Git from the official website.
      
        4. Set Up a Project Folder: Create a new folder for your project. Open a terminal or command prompt and navigate to the project folder.
      
        5. Initialize a Node.js Project: Run the command 'npm init' in the project folder to initialize a new Node.js project. Follow the prompts to set up the project.
      
        6. Install Dependencies: Install any necessary dependencies using the 'npm install' command.
      
        7. Start Coding: You are now ready to start coding your project using your preferred programming language and frameworks.
      `,
      author: 'John Doe',
      date: 'July 1, 2023',
    },
    {
      id: '2',
      title: 'Starting a React App with Bulma Styling',
      content: 'To start a React app with Bulma styling, follow these steps:',
      instructions: `
        1. Set Up a React Project: Create a new React project using Create React App by running the command 'npx create-react-app my-app' in your terminal or command prompt.
      
        2. Install Bulma: Navigate to the project folder by running 'cd my-app'. Install Bulma by running 'npm install bulma'.
      
        3. Import Bulma Styles: Open the 'src/index.js' file and import the Bulma CSS file by adding the following line at the top: 'import "bulma/css/bulma.css";'.
      
        4. Use Bulma Components: Start building your React components and utilize the various Bulma classes and components to style your application.
      
        5. Customize Styling: If desired, customize the Bulma styling by overriding the default CSS classes or using Sass to modify the variables.
      
        6. Start the Development Server: Run 'npm start' to start the development server and view your React app with Bulma styling in the browser.
      `,
      author: 'John Doe',
      date: 'July 2, 2023',
    },
    {
      id: '3',
      title: 'Deploying a React App to AWS for Free',
      content: 'To deploy a React app to AWS for free, follow these steps:',
      instructions: `
        1. Set Up an AWS Account: Visit the AWS website and create a new account if you don't have one already.
      
        2. Install the AWS CLI: Install the AWS Command Line Interface (CLI) on your local machine by following the installation instructions provided by AWS.
      
        3. Configure AWS Credentials: Run 'aws configure' in your terminal or command prompt and enter your AWS Access Key ID, Secret Access Key, default region, and default output format.
      
        4. Build Your React App: In your React project folder, run the command 'npm run build' to create a production-ready build of your app.
      
        5. Deploy to AWS S3: Use the AWS CLI to create an S3 bucket, configure it for static website hosting, and upload the build files to the bucket.
      
        6. Configure DNS and CloudFront (optional): If you want to use a custom domain name, configure DNS settings and set up CloudFront as a CDN for your app.
      
        7. Test Your Deployed App: Access your app using the provided S3 bucket URL or your custom domain.
      `,
      author: 'John Doe',
      date: 'July 3, 2023',
    },
  ];

  const post = posts.find((post) => post.id === id);

  return (
    <div className="container">
      <div className="blog-post">
        <h1 className="title is-2">{post.title}</h1>
        <p className="subtitle is-6">By {post.author} on {post.date}</p>
        <div className="content">
          <p>{post.content}</p>
          <hr />
          <div className="box">
            <h2 className="title is-4">Instructions:</h2>
            <pre>
              <code>{post.instructions}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
