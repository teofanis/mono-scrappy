import React from "react";
import ReactSelect, { Props } from "react-select";

type DropdownProps = Props & {
  id: string;
  label: string;
};

export type DropdownOption = {
    value: string;
    label: string;
}


const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const GRAYISH = '#6b7280';
  const defaultStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? GRAYISH : '#FFF',
      color: state.isSelected ? '#FFF' : GRAYISH,
      "&:hover": {
        backgroundColor: GRAYISH,
        color: '#FFF',
        cursor: "pointer",
      },
    }),
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      color: GRAYISH,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
      color: GRAYISH,
    }),
    container: (base:any, state:any) => ({
        ...base,
        border: `1px ${GRAYISH} solid`,
        borderRadius: '0.55rem',
        paddingTop: '0.2em',
        paddingBottom: '0.1em',
      }),
    singleValue: (provided: any) => ({
      ...provided,
      color: GRAYISH,
    }),
    control: (base: any) => ({
      ...base,
      border: 0,
      color: GRAYISH,
      boxShadow: "none",
    }),
  };

  return (
    <>
      <label htmlFor={props.id} className="pb-2 font-semibold text-lg flex ">{props.label}</label>
      <ReactSelect
        {...props}
        styles={defaultStyles}
        isClearable={true}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </>
  );
};

export default Dropdown;
