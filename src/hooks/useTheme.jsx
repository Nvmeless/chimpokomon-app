import useColorByBenjamin from "./useColorByBenjamin";

const useJinTheme = ({
  container = {
    primary: "blue",
    secondary: "white",
  },
  colors = {
    primary: "blue",
    secondary: "white",
  },
}) => {
  const [containerColors, setContainerColors] = useColorByBenjamin(container);
  const [colorsColors, setColorsColors] = useColorByBenjamin(colors);
  const setTheme = ({ colors, containers }) => {
    setColorsColors(colors);
    setContainerColors(containers);
  };
  return [
    {
      colors: { colors: colorsColors, containers: containerColors },
    },
    setTheme,
  ];
};

export default useJinTheme;
