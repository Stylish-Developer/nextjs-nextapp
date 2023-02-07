// --> static site generation

// --> generate static paths by using getStaticPaths in static site generation
export const getStaticPaths = async () => {
  // getStaticPaths is a spl function in next js
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();

  const paths = json.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// --> getStatic props
export const getStaticProps = async (context) => {
  const id = context.params.id;
  // getStaticProps is a spl function in next js
  const getData = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const parseData = await getData.json();

  return {
    props: {
      user: parseData,
    },
  };
};

const Detail = ({ user }) => {

    console.log(user)
  return (
    <>
      <p>Detail Page</p>

      <h4>Name: {user.name}</h4>
      <h5>UserName: {user.username}</h5>
      <p>Email: {user.email}</p>
    </>
  );
};

export default Detail;
