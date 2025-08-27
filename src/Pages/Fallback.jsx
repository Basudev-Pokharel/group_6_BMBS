import React from "react";

function Fallback() {
  return (
    <div>
      <section>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <p>
          Please check the URL or go back to the <a href="/">Home</a> page.
        </p>
        <br />
      </section>
    </div>
  );
}

export default Fallback;
