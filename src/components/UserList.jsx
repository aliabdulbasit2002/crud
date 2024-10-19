import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/userSlice";

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <div className="w-1/2 p-10 space-y-10">
      {users.map((user) => (
        <Card className="w-96 bg-gray-300" key={user.id}>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Name: {user.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Email: {user.email}
            </Typography>
          </CardBody>
          <div className="p-6 flex justify-center gap-10">
            <Button color="blue">Edit</Button>
            <Button color="red" onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
