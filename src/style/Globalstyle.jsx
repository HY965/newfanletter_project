import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{  
    display: flex;
    justify-content: center;
}
`;

export default Globalstyle;
