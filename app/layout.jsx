import React, { Children } from "react";

const layout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Propertysite</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default layout;
