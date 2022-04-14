import { Navbar, Table } from "react-bootstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useGetUsersQuery } from "./services/userService";
import TableRow from "./componenets/TableRow";

function App() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);
  const { data, isLoading } = useGetUsersQuery({ page, limit });

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email </th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
      <Navbar fixed="bottom">
        {data.from} to {data.to} of {data.total}
        Page:
        <input
          value={page}
          type="number"
          onChange={(e) => setPage(e.target.value)}
        />
        Limit:
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </Navbar>
    </div>
  );
}

export default App;
