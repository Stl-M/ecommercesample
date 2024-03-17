import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { IncreaseItemQuatity, decreaseItemQuatity } from "./cartSlice";

function UpdateItemQuatity({ pizzaId, currentQuatity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuatity(pizzaId))}
      >
        {" "}
        -{" "}
      </Button>
      <span className="text-sm font-medium"> {currentQuatity}</span>
      <Button
        type="round"
        onClick={() => dispatch(IncreaseItemQuatity(pizzaId))}
      >
        {" "}
        +{" "}
      </Button>
    </div>
  );
}

export default UpdateItemQuatity;
