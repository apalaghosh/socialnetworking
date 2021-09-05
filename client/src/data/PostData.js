export const getPosts = async () => {
  const data = await fetch("http://localhost:3000/getdata");
  //   console.log(data);
  const result = await data.json();
  return result;
};
