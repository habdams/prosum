import axios, { AxiosResponse } from "axios";

export interface SignupFormData {
  username: string;
  password: string;
}

export interface UserData {
  username: string;
  password: string;
}

export const signup = async (
  formData: SignupFormData
): Promise<{ token: string }> => {
  try {
    const response: AxiosResponse<{ token: string }> = await axios.post(
      "https://prosum-api.onrender.com/user",
      formData
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);

    throw new Error(error.response?.data?.message ?? "Sign up failed");
  }
};

export const getUser = async (token: string): Promise<UserData> => {
  try {
    const response: AxiosResponse<UserData> = await axios.get(
      "https://prosum-api.onrender.com/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message ?? "Failed to get user");
  }
};
