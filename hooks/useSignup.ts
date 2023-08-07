import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { SignupFormData, signup } from "../api";

interface SignupMutationData {
  token: string;
}

export const useSignup = () => {
  const queryClient = useQueryClient();

  const signupMutation = useMutation<
    { token: string },
    AxiosError,
    SignupFormData
  >((formData) => signup(formData), {
    onSuccess: (data: SignupMutationData) => {
      queryClient.setQueryData("token", data.token);
      localStorage.setItem("token", data.token);
    },
    onError: (error: AxiosError<any>) => {
      throw new Error(error.response?.data?.message ?? "Sign up failed");
    },
  });

  return signupMutation;
};
