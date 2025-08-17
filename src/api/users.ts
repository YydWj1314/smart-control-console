import { post } from "../utils/http/request";

/**
 * Api for users
 *
 *
 */

interface LoginData {
  username: string;
  password: string;
}

export function login(data: LoginData) {
  return post("/login", data);
}
