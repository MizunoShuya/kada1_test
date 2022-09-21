import {createStore as reduxCreateStore} from 'redux'
import { rootReducer } from '../searchtext/reducers'

export default function createStore(){
  return reduxCreateStore(
    rootReducer
  )
}