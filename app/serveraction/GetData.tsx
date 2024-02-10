'use server';
import {connectToDatabase} from '../../lib/connectToDatabase';

async function GetData() {
  const {mongoClient} = await connectToDatabase();
  const db = mongoClient?.db('blog');
  const collection = db?.collection('blog');

  const contacts = await collection
    ?.find({})
    .project({
      grades: 0,
      borough: 0,
    })
    .toArray();

  return (
    <div className="m-10 border border-black px-2">
      <h3 className="my-4 flex items-center justify-center text-lg">
        Production Information
      </h3>

      {contacts?.map((product) => (
        <div
          key={product._id}
          className="mb-2 flex  flex-col border border-red-500 p-2 lg:flex-row ">
          <p className=":w-full mb-2 mr-0 border border-blue-500 p-2 lg:mb-0  lg:mr-2 lg:w-1/2">
            Topic: {product.name}
          </p>
          <p className=" w-full border  border-blue-500  p-2  lg:w-1/2 ">
            Content: {product.cuisine}
          </p>
        </div>
      ))}
      {contacts?.map((product) => (
        <div
          key={product._id}
          className="mb-2 flex  flex-col  p-2 lg:flex-row ">
          <p className="mb-2 mr-0 w-full  p-2 lg:mb-0  lg:mr-2 lg:w-1/2">
            Topic: {product.name}
          </p>
          <p className=" w-full  p-2  lg:w-1/2 ">Content: {product.cuisine}</p>
        </div>
      ))}
      {contacts?.map((product) => (
        <div
          key={product._id}
          className="mb-2 grid grid-cols-1 gap-x-2 border border-red-500 p-2 lg:grid-cols-2">
          <p className="mb-2 border border-blue-500 p-2 lg:mb-0">
            Topic: {product.name}
          </p>
          <p className="border border-blue-500 p-2">
            Content: {product.cuisine}
          </p>
        </div>
      ))}
      {contacts?.map((product) => (
        <div
          key={product._id}
          className="mb-2 grid grid-cols-1 gap-x-2  p-2 lg:grid-cols-2">
          <p className="mb-2  p-2 lg:mb-0">Topic: {product.name}</p>
          <p className="p-2">Content: {product.cuisine}</p>
        </div>
      ))}
    </div>
  );
}

export default GetData;
