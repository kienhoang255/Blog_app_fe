import { INIT_STATE } from "../../constant";

export default function modalReducers(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case "SOMETHING":
      break;
    default:
      return state;
  }
}
