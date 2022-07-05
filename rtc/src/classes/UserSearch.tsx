import React, { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

export default class UserSearch extends Component<UserSearchProps> {
  state: { search: string; user: User | undefined } = {
    search: "",
    user: undefined,
  };

  searchGuest = () => {
    this.setState({
      user: this.props.users.filter(
        (user) => user.name === this.state.search
      )?.[0],
    });
  };

  render() {
    const { user, search } = this.state;
    return (
      <div>
        <h3>UserSearch</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        <button onClick={this.searchGuest}>Search</button>
        <div>
          Name : {user?.name || "-"}
          <br />
          Age : {user?.age || "-"}
        </div>
      </div>
    );
  }
}
