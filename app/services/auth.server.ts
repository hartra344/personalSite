import { Authenticator, AuthorizationError, GitHubStrategy } from "remix-auth";
import { User } from "~/models/user";
import { sessionStorage } from "~/services/session.server";

export let authenticator = new Authenticator<User>(sessionStorage);

if (!process.env.GITHUB_CLIENT_ID) {
  throw new Error("Missing GITHUB_CLIENT_ID env");
}

if (!process.env.GITHUB_CLIENT_SECRET) {
  throw new Error("Missing GITHUB_CLIENT_SECRET env");
}

authenticator.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    async (_, __, ___, profile) => {
      const id: string = profile.id;
      if (id !== "13208452") {
        throw new AuthorizationError();
      }
      const displayName = profile.displayName;
      return { displayName, id };
    }
  )
);
