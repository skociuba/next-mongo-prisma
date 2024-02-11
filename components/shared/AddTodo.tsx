import Input from '../ui/Input';
import Button from '../ui/Button';
import Form from '../ui/Form';

import {create} from './../../app/serveraction/actions';

const AddTodo = () => (
  <Form action={create} className="m-auto w-1/2">
    <div className="flex">
      <Input name="name" type="text" placeholder="title" />
      <Input name="cuisine" type="text" placeholder="content" />
      <Button type="submit" text="Add" />
    </div>
  </Form>
);

export default AddTodo;
