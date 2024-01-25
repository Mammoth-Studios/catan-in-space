// example component importing all architecture layers
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { featureComponentOneSlice } from "./feature-component-one.slice";
import { FeatureComponentOneProps, User } from "./feature-component-one.types";
import "./feature-component-one.style.scss";
import { useGetUsersQuery } from "./feature-component-one.queries";

export const FeatureComponentOne: FC<FeatureComponentOneProps> = ({
  propCount,
}) => {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetUsersQuery({});

  const {
    actions: { increaseCount },
    selectors: { getCount },
  } = featureComponentOneSlice;

  const count = useSelector(getCount);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div>
      <p id="prop-count">
        Count from Props:
        {propCount}
      </p>
      <p>
        Count from Redux:
        {count}
      </p>
      <button type="button" onClick={() => dispatch(increaseCount())}>
        Increase Count
      </button>
      <div>
        <p>Data from RTK Query:</p>
        {data.map((user: User) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};
