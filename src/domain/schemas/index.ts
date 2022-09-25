import { buildSchemaSync } from 'type-graphql';
import Tweet from './Tweet';
import TweetController from '../../infrastructure/controllers/TweetController';
import User from './User';
import UserController from '../../infrastructure/controllers/UserController';
import Auth from './Auth';
import SessionController from '../../infrastructure/controllers/SessionController';

import AuthenticationAssurance from "../../infrastructure/middlewares/AuthenticationAssurance";

import Node from "./Node";

const schema = buildSchemaSync({
  resolvers: [Tweet, TweetController, User, UserController, Auth, SessionController, Node],
  authChecker: AuthenticationAssurance
})

export default schema;
