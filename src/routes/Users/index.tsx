import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../store/actions/productAction";

interface UserState {
  products: {
    login: string;
  }[];
}

const Users = () => {
  const data = useSelector((state: UserState) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      Users
      <button
        onClick={() => {
          dispatch(productList());
        }}
      >
        Click to get users
      </button>
      {console.log()};
    </>
  );
};

export default Users;
