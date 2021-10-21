import * as React from "react"
import { MultiSelect } from "react-multi-select-component";

import "./Select.scss"

const options = [
    {label: "Crime", value:"crime"},
    {label: "Documentary", value:"documentary"},
    {label: "Horror", value:"horror"},
    {label: "Comedy", value:"comedy"}
];

export const Select: React.FC<React.PropsWithChildren<{}>> = (props: React.PropsWithChildren<{}>) => {
  const [selected, setSelected] = React.useState([]);

  return (
    <div className="selectTheme">
      <MultiSelect
        disableSearch={true}
        hasSelectAll={false}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};


