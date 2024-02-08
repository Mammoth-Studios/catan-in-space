// example component importing all architecture layers
import { FC } from "react";
import { useSelector } from "react-redux";
import { featureTwoComponentOneSlice } from "./lib-component-one.slice";
import { FeatureTwoComponentOneProps } from "./lib-component-one.types";
import "./feature-two-component-one.style";
import { useGetUsersQuery } from "./lib-component-one.queries";

const FeatureTwoComponentOne: FC<FeatureTwoComponentOneProps> = ({
  propCount,
}) => {
  const { data, isLoading, error } = useGetUsersQuery({});

  const {
    actions: { increaseCount },
    selectors: { getCount },
  } = featureTwoComponentOneSlice;

  const count = useSelector(getCount);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div>
      <p>
        Count from Props:
        {propCount}
      </p>
      <p>
        Count from Redux:
        {count}
      </p>
      <button type="button" onClick={() => increaseCount()}>
        Increase Count
      </button>
      <p>
        Data from API:
        {data.toString()}
      </p>
    </div>
  );
};

export default FeatureTwoComponentOne;
