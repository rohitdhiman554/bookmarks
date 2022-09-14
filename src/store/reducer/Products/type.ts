import { productList } from "../../actions/productAction";

interface Sample {
  type: "SET_PRODUCTLIST";
  payload: {
    data: {
      login: string;
    };
  };
}

export type Actions = Sample;
