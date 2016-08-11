//'use strict';

import alertBox from '../pages/alertBox';
import whiteHeader from '../pages/whiteHeader';

console.log(alertBox)



export default data =
{
    section1:{
      row1 : {'name' : "alertBox" , 'goto' : alertBox },
      row2 : {'name' : "alertBox" , 'goto' : alertBox },
    },
    section2:{
      row1 : {'name' : "alertBox" , 'goto' : alertBox },
      row2 : {'name' : "whiteHeader" , 'goto' : whiteHeader },
    },
    section3:{
      row1 : {'name' : "whiteHeader" , 'goto' : whiteHeader },
      row2 : {'name' : "whiteHeader" , 'goto' : whiteHeader },
    },
};
