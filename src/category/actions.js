import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_LOAD, CATEGORY_REMOVE } from './reducer';
import categoryApi from '../services/categories-api';

export function loadCategories() {
  return async dispatch => {
    const categories = await categoryApi.get();
    dispatch({ type: CATEGORY_LOAD, payload: categories });
  };
}
export function addCategory(category) {
  return async dispatch => {
    const saved = await categoryApi.add(category);
    dispatch({ 
      type: CATEGORY_ADD, 
      payload: saved 
    });
  };
}

export function updateCategory(category) {
  return async dispatch => {
    const updated = await categoryApi.update(category);
    dispatch({
      type: CATEGORY_UPDATE,
      payload: updated
    });
  };
}

export function removeCategory(id) {
  return async dispatch => {
    await categoryApi.remove(id);
    dispatch({
      type: CATEGORY_REMOVE,
      payload: id
    });
  };
}