import React from 'react';

import {todoType} from '../../types/toDoTypes';

import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';
const Todo = ({data}: {data: todoType[]}) => (
  <div className="m-10">
    {data?.map((product) => (
      <div
        key={product.id}
        className="mb-2 flex  flex-col border border-red-500 p-2 lg:flex-row ">
        <p className=":w-full mb-2 mr-0 border border-blue-500 p-2 lg:mb-0  lg:mr-2 lg:w-1/2">
          Topic: {product.name}
        </p>
        <p className=" w-full border  border-blue-500  p-2  lg:w-1/2 ">
          Content: {product.cuisine}
        </p>
        <div className="flex items-center gap-5">
          <EditTodo todo={product} />
          <DeleteTodo todo={product} />
        </div>
      </div>
    ))}
  </div>
);

export default Todo;
