import React from 'react'
import Button from 'react-bootstrap/Button';

const MyButton = () => {
  return (
    <div>
        <br/>
      <Button variant="primary" size='sm'>Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light" size="lg">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>

  )
}

export default MyButton