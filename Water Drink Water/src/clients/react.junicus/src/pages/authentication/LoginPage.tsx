import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import type { UserLogin } from "lib/types";
import { useStore } from "stores/store";
import { observer } from "mobx-react-lite";

const LoginPage = () => {
  const { accountStore } = useStore();
  const defaultValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const methods = useForm<UserLogin>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const onSubmit = async (values: UserLogin) => {
    try {
      await accountStore.login(values);
    } catch (error) {
      const message = (error as Error)?.message || "Login failed";
    }
  };

  return (
    <div className="bg-amber-200 h-screen w-screen flex items-center justify-center">
      <div className="bg-white rounded-md border-2 border-amber-500 flex flex-col divide-y-2 divide-amber-500">
        <div className="p-4">
          <h4>Sign In</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-4">
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="name@example.com"
              {...register("email")}
            />
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <div>
            <button type="submit" disabled={!isValid && isSubmitting}>
              Log In
            </button>
          </div>
        </form>
        <div className="p-4">
          <Link to="/register">Register</Link> new account
        </div>
      </div>
    </div>
  );
};

export default observer(LoginPage);
