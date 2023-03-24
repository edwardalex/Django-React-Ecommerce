import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type='text'
        placeholder="Search"
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        className='me-2'
      ></Form.Control>

      <Button type='submit' variant='outline-success' className='p-2'>
        Submit
      </Button>
    </Form>
  );
};

export default SearchBox;
