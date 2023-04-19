import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeFilter } from "../../redux/sliceFilter";
import s from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={filters} onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;
