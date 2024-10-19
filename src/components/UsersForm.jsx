import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { addUser } from "../features/userSlice";
import { useDispatch } from "react-redux";

export default function UsersForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { name, email } = data;
    const newUser = {
      name,
      email,
      id: uuid(),
    };
    dispatch(addUser(newUser));
    reset();
  };

  return (
    <Card color="transparent" shadow={false} className="p-10">
      <Typography variant="h4" color="blue-gray">
        Users Form
      </Typography>

      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            type="text"
            {...register("name", { required: true })}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            type="email"
            {...register("email", { required: true })}
          />
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
}
