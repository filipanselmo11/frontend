export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  name: string;
  username: string;
  password: string;
}
