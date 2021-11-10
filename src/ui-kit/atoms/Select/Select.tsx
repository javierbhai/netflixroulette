import * as React from "react"
import { MultiSelect } from "react-multi-select-component";
import "./Select.scss";

type Props = {
  selectOptions?: any[]
}

export const Select: React.FC<Props> = (props: Props) => {
  const { selectOptions } = props
  const [selected, setSelected] = React.useState([]);

  return (
    <div className="selectTheme">
      <MultiSelect
        disableSearch={true}
        hasSelectAll={false}
        options={selectOptions}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};


