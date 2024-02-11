'use client';

import {BiEdit} from 'react-icons/bi';
import {useState} from 'react';

import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import {todoType} from '../../types/toDoTypes';
import {edit} from '../../app/serveraction/actions';

const EditTodo = ({todo}: {todo: todoType}) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex items-center gap-5">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton={true} />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="name" placeholder="Edit Todo..." />
            <Input type="text" name="cuisine" placeholder="Edit Todo..." />

            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
