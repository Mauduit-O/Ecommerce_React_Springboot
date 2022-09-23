import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import axios from 'axios';
import { useParams } from "react-router-dom";

export const SelectSubCategory = () => {

  const [options, setOptions] = useState([""]);
  const { id } = useParams();  

  useEffect(() => {
    const getData = async () => {
      const arr: any[] | PromiseLike<any[]> = []
      const arrPlaceholder: any[] | PromiseLike<any[]> = []
      await axios.get('/selectSubCat'+id+'', {
        baseURL: 'http://localhost:8082',
      }).then((res) => {
        let result = res.data;
        result.map((item: { title: string;  id: number}) => {
          return arr.push({
            value: item.id, 
            label: item.title,
            color: "#0B7698",
          }) 
        });
        setOptions(arr)
      });
    };
    getData();
  }, []);
  
  // const colors = [
  //   { value: "jack", label: "Jack", color: "#FF8B00" },
  //   { value: "john", label: "John", color: "#36B37E" },
  //   { value: "mike", label: "Mike", color: "#0052CC" },
  // ];
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



  const handleChange = (selectedOption: any, actionMeta: any) => {
    // console.log("handleChange", selectedOption, actionMeta);
    console.log(selectedOption)
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