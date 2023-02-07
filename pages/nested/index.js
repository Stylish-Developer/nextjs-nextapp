import { Link, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

// --> static site generation
export const getStaticProps = async () => {
  // getStaticProps is a spl function in next js
  const getData = await fetch("https://jsonplaceholder.typicode.com/users");
  const parseData = await getData.json();

  return {
    props: { users: parseData }, // its a standard syntax to use this props
  };
};

const Nested = ({ users }) => {
  console.log("users", users);
  return (
    <>
      <List>
        contacts:{" "}
        {users &&
          users.map((item) => (
           <Link  href={`nested/${item.id}`} key={item.id}>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={item.username} />
              </ListItemButton>
            </ListItem>
           </Link>
          ))}
      </List>
    </>
  );
};

export default Nested;


