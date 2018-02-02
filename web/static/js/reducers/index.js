import { combineReducers } from "redux"

import { reducer as presences } from "../redux/presences"
import { reducer as usersById } from "../redux/users_by_id"
import { reducer as ideas } from "../redux/ideas"
import { reducer as votes } from "../redux/votes"
import { reducer as stage } from "../redux/stage"
import { reducer as insertedAt } from "../redux/inserted_at"
import { reducer as alert } from "../redux/alert"

const rootReducer = combineReducers({
  presences,
  usersById,
  ideas,
  votes,
  stage,
  insertedAt,
  alert,
})

export default rootReducer
