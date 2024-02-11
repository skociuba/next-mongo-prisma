'use client';

import {BsFillTrashFill} from 'react-icons/bs';

import Button from '../ui/Button';
import Form from '../ui/Form';
import {todoType} from '../../types/toDoTypes';

import {deleteTodo} from './../../app/serveraction/actions';

const DeleteTodo = ({todo}: {todo: todoType}) => (
  <Form action={deleteTodo}>
    <input type="hidden" name="inputId" value={todo.id} />
    <Button actionButton={true} text={<BsFillTrashFill />} type="submit" />
  </Form>
);

export default DeleteTodo;
