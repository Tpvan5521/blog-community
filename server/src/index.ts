import "dotenv/config";
import App from "./app";
import PostsController from "./post/post.controller";
import validateEnv from "./utils/validateEnv";

validateEnv();
const app = new App([new PostsController()]);
app.listen();
