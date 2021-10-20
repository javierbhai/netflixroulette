import * as React from "react"
import "./Select.scss"
import { MultiSelect } from "react-multi-select-component";

type Props = {
    children?: string
}

const options = [
    {label: "Crime", value:"crime"},
    {label: "Documentary", value:"documentary"},
    {label: "Horror", value:"horror"},
    {label: "Comedy", value:"comedy"}
];

export const Select: React.FC<Props> = (props: Props) => {
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


