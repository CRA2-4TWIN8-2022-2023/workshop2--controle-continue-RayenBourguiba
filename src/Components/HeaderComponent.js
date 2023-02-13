import Alert from 'react-bootstrap/Alert';
import React from 'react';

function HeaderComponent() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, Welcome To Our Shop <b>My Store</b></Alert.Heading>
      <p>
        Thank you for choosing our store, we hope you enjoy your shopping experience!
      </p>
      <hr />
    </Alert>
  );
}

export default HeaderComponent;