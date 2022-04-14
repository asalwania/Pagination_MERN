import React from "react";
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useUpdateUserMutation } from "../services/userService";

import InitialIcon from "./Initials";

// get initials of a user name;
const getInitials = (name) => {
  const nameArray = name.split(" ");
  let initials = "";
  nameArray.forEach((item) => {
    initials = initials + item[0].toUpperCase();
  });
  return initials;
};

const TableRow = ({ user }) => {
  const [email, setEmail] = React.useState();
  const [editEmail, setEditEmail] = React.useState(false);

  const [updateEmail] = useUpdateUserMutation();

  React.useState(() => {
    setEmail(user.email);
  }, [user.email]);

  return (
    <tr key={user.id}>
      <td>
        <div style={{ display: "flex" }}>
          <InitialIcon initials={getInitials(user.name)} />
          <div style={{ margin: "10px 0px 0px 10px" }}>{user.name}</div>
        </div>
      </td>
      <td>
        {editEmail ? (
          <>
            <input
              style={{ margin: "5px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AiOutlineCheck
              onClick={() => {
                updateEmail({ id: user.id, email });
                setEditEmail(false);
              }}
            />
            <AiOutlineClose onClick={() => setEditEmail(false)} />
          </>
        ) : (
          email
        )}
      </td>
      <td>{new Date(user.createdAt).toLocaleString()}</td>
      <td>{new Date(user.updatedAt).toLocaleString()}</td>
      <td>
        <AiFillEdit onClick={() => setEditEmail(!editEmail)} size="20px" />
      </td>
    </tr>
  );
};

export default TableRow;
