import { TypeAddGoal } from './ModalCreateGoalActions';

export const openCloseReducer = (prevState = false, action) => {
  switch (action.type) {
    case TypeAddGoal.MODAL_CREATE_GOAL_OPEN:
      return true;
    case TypeAddGoal.MODAL_CREATE_GOAL_CLOSE:
      return false;

    default:
      return prevState;
  }
};

export const i = () => null;

// export const goalReducer = (prevState = {}, action) => {
//   switch (action.type) {
//     case Type.ADD_GOAL_SUCCESS:
//       return action.payload.goal;

//     default:
//       return prevState;
//   }
// };

// export const isLoadingGoal = (prevState = false, action) => {
//   switch (action.type) {
//     case Type.ADD_GOAL_START:
//       return true;
//     default:
//       return prevState;
//   }
// };

// export const errorGoal = (prevState = null, action) => {
//   switch (action.type) {
//     case Type.ADD_GOAL_ERROR:
//       return action.payload.error;

//     case Type.ADD_GOAL_SUCCESS:
//     case Type.ADD_GOAL_START:
//       return null;
//     default:
//       return prevState;
//   }
// };
