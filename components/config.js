import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64b8e1fa7aa80a7f81de"); // Your project ID

export const account = new Account(client);

//Database

export const databases = new Databases(
  client,
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE
);
