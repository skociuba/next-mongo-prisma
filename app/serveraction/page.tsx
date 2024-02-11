import React from 'react';

import Todo from '../../components/shared/Todo';
import AddTodo from '../../components/shared/AddTodo';

import {getData} from './actions';
const page = async () => {
  const data = await getData();

  return (
    <div className="m-10 border border-black bg-black px-2 text-white">
      <AddTodo />
      <Todo data={data} />
    </div>
  );
};
export default page;
