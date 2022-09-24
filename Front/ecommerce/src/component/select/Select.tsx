import CreatableSelect from "react-select/creatable";

interface selectProps {
  options: [{}],
  handleChange: (selectedOption: any) => void,
}

export const SelectSubCategory = (props: selectProps): JSX.Element => {
  const {options, handleChange} = props;
  
  const colorStyles = {
    control: (styles: any) => ({ ...styles, backgroundColor: "black"}),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles: any, { data }: any) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles: any, { data }: any) => {
      return {
        ...styles,
        color: "white",
      };
    },
    multiValueRemove: (styles: any, { data }: any) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  const handleInputChange = (inputValue: any, actionMeta: any) => {
    // console.log("handleInputChange", inputValue, actionMeta);
  };

  return (
    <CreatableSelect
      placeholder='Trier par sous-categories'
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      styles={colorStyles}
    />
  );
};