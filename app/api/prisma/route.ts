import {NextResponse} from 'next/server';

import {prisma} from '../../../prisma/index';

async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error('Database Connection Unsuccessull');
  }
}

export const GET = async () => {
  try {
    await main();
    const post = await prisma.post.findMany();

    return NextResponse.json({message: 'Success', post}, {status: 200});
  } catch (err) {
    return NextResponse.json({message: 'Error', err}, {status: 500});
  } finally {
    await prisma.$disconnect();
  }
};
export const POST = async (request: Request) => {
  try {
    await main();
    const newContact = await request.json();
    const post = await prisma.post.create({data: newContact});

    return NextResponse.json({message: 'Add Success', post}, {status: 200});
  } catch (err) {
    return NextResponse.json({message: 'Error', err}, {status: 500});
  } finally {
    await prisma.$disconnect();
  }
};
export const DELETE = async (request: Request) => {
  try {
    await main();
    const {_id} = await request.json();
    const post = await prisma.post.delete({
      where: {
        id: _id,
      },
    });

    return NextResponse.json({message: 'Success', post}, {status: 200});
  } catch (err) {
    return NextResponse.json({message: 'Error', err}, {status: 500});
  } finally {
    await prisma.$disconnect();
  }
};
export const PUT = async (request: Request) => {
  try {
    await main();
    const updatedPost = await request.json();

    const {id, name, cuisine} = updatedPost;
    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {name, cuisine},
    });

    return NextResponse.json({message: 'Success', post}, {status: 200});
  } catch (err) {
    return NextResponse.json({message: 'Error', err}, {status: 500});
  } finally {
    await prisma.$disconnect();
  }
};
