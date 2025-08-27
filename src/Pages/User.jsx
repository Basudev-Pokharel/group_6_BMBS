import React from "react";

function User() {
  return (
    <div>
      <section>
        <h2>User Profile</h2>
        <p>Welcome to your profile page.</p>
        <br />
        <form>
          <label>Name:</label>
          <br />
          <input type="text" name="name" />
          <br />
          <br />
          <label>Email:</label>
          <br />
          <input type="email" name="email" />
          <br />
          <br />
          <button type="submit">Update</button>
        </form>
        <br />
      </section>
    </div>
  );
}

export default User;
