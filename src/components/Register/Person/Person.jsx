import React from "react";

import axios from "axios";

export default class Person extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImRhdGEiOnsiaWQiOjMsImN1cnJlbnRQcm9maWxlIjp7ImlkIjoxOCwiY29tcGFueV9pZCI6MSwidXNlcl90eXBlX2lkIjoyfX0sImlhdCI6MTU1OTkyMzMyNn0.0GPBsK50SqMrgTPH_k5xC2brsSKJqIMkUeKtmPresrc",
      },
    };
    axios.get(`http://localhost:3333/users`,config).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <h1>Lista de pessoas</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key= {user.id}>{user.person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
