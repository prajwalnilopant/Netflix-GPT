import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  // Uncaught OpenAIError: It looks like you're running in a browser-like environment.
  // This is disabled by default, as it risks exposing your secret API credentials to attackers.
  // If you understand the risks and have appropriate mitigations in place,
  // you can set the `dangerouslyAllowBrowser` option to `true`.
  dangerouslyAllowBrowser: true,
});
export default openai;
