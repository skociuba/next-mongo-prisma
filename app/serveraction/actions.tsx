'use server';
import {revalidatePath} from 'next/cache';

import {prisma} from '../../prisma/index';

export async function getData() {
  const data = await prisma.blog.findMany();
  return data;
}

export async function create(formData: FormData) {
  const input1 = formData.get('name') as string;
  const input2 = formData.get('cuisine') as string;

  if (!input1.trim() || !input2.trim()) {
    return;
  }

  await prisma.blog.create({
    data: {
      name: input1,
      cuisine: input2,
    },
  });

  revalidatePath('/');
}

export async function edit(formData: FormData) {
  const input1 = formData.get('name') as string;
  const input2 = formData.get('cuisine') as string;
  const inputId = formData.get('inputId') as string;

  await prisma.blog.update({
    where: {
      id: inputId,
    },
    data: {
      name: input1,
      cuisine: input2,
    },
  });

  revalidatePath('/');
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get('inputId') as string;

  await prisma.blog.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath('/');
}
