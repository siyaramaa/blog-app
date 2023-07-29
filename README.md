This is a [Next.js](https://nextjs.org/) Blog Project built on new app router which i have developed for posting spritual blogs or posts with [Sanity.io](https://sanity.io/).

## Getting Started
First, Setup a account by creating a sanity account and create a project and get the following details:
1. Project ID
2. API Version
3. DATASET

and set them inside of a .env.local file like:
- NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_ID
- NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
- NEXT_PUBLIC_SANITY_API_VERSION=your_API_version

or you can also do:
```bash
cp .env.example .env.local
```
and add your details there.

After setting up the environment variable, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding blog posts to the Sanity backend or database.

To add blog posts to your website and see them on your home page, you can navigate to [http://localhost:3000/studio](http://localhost:3000/studio) and login with your authorized sanity account and start adding your posts, category, author and banners.

You can also add other schemas by going into the `/schemas` folder and creating a new `your_schema.js` file and defining a new schema in it and exporting it which will then be automatically added to your studio.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details about deploying your application to the internet.


## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).


