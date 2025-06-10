import { InputField } from "@/registry/default/inputs/input-field";
import { SelectField } from "@/registry/default/inputs/select-field";
function propsToJsxString(name: string, props: Record<string, any>) {
  const formatValue = (value: string | boolean) => {
    if (Array.isArray(value)) {
      return `{[\n   ${value
        .map((v) => JSON.stringify(v))
        .join("\n   ")}   \n]}`;
    }
    if (typeof value === "string") {
      return `"${value}"`;
    }
    if (typeof value === "boolean") {
      return `{${value}}`;
    }
    return `{${JSON.stringify(value)}}`;
  };

  const propsString = Object.entries(props)
    .map(([key, value]) => `  ${key}=${formatValue(value)}`)
    .join("\n");

  return `<${name}\n${propsString}\n/>`;
}

const components = [
  {
    name: "input-field",
    title: "Input field with a label",
    Component: InputField,
    props: {
      label: "Name",
      placeholder: "Enter your name",
    },
  },
  {
    name: "select-field",
    title: "Select field with options",
    Component: SelectField,
    props: {
      label: "Select your framework",
      options: [
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Angular", value: "angular" },
        { label: "Svelte", value: "svelte" },
      ],
      placeholder: "Select an option",
    },
  },
];

function kebabToCamel(str: string) {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

const enhancedComponentList = components.map(
  ({ Component, props, ...rest }) => ({
    ...rest,
    // @ts-ignore
    component: () => <Component {...props} />,
    codeBlock: propsToJsxString(kebabToCamel(rest.name), props),
  })
);

export default enhancedComponentList;
