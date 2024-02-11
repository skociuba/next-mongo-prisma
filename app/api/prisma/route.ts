import {NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

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
    const blog = await prisma.blog.findMany();

    return NextResponse.json({message: 'Success', blog}, {status: 200});
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
    const blog = await prisma.blog.create({data: newContact});

    return NextResponse.json({message: 'Add Success', blog}, {status: 200});
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
    const blog = await prisma.blog.delete({
      where: {
        id: _id,
      },
    });

    return NextResponse.json({message: 'Success', blog}, {status: 200});
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
    const blog = await prisma.blog.update({
      where: {
        id,
      },
      data: {name, cuisine},
    });

    return NextResponse.json({message: 'Success', blog}, {status: 200});
  } catch (err) {
    return NextResponse.json({message: 'Error', err}, {status: 500});
  } finally {
    await prisma.$disconnect();
  }
};
