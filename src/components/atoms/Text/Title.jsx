import { DOM } from "../../nanites";
function Title(props) {
  let defaultTitle = "Vous avez oublié de mettre un titre a votre composant";
  return (
    <DOM.StyledTitle>
      {props?.children && props?.children !== ""
        ? props?.children
        : defaultTitle}
    </DOM.StyledTitle>
  );
}

export default Title;
