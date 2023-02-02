import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../../../../tests';
import Question from './Question';

const algo = Object.values(data[0]['CIENCIAS JURIDICAS'][0])[0];
const categoria = Object.values(data);
const item1 = Object.values(data[0]);

const testFromServer = [...Object.values(algo[0])].pop();
let yago = Object.keys

// const QuestionLists = () => {
//   const [test, setTest] = useState(testFromServer);
//   //   console.log(test);
//   //   console.log('soy algo', algo);
//   //   console.log('categoria', categoria);
//   //   for (let index = 0; index < item1.length; index++) {
//   //    console.log( "del bluce", item1[index][0])
//   //   }
//   return (
//     <div>
//       {/* <Box bg="Red">
//         <h1>Categorías</h1>
//         {data.map((category, idx) => {
//           let title = Object.keys(category)[0];
//           return (
//             <div>
//               <p>{title}</p>
//             </div>
//           );
//         })}
//       </Box> */} 
//       {data.map((category) => (
//         <h1>{Object.keys(category)[0]}</h1>

//         {category[Object.keys(category)[0]].map((unit) => (

//             <h2>{Object.keys(unit)[0]}</h2>
//             ))}
//         ))}


      
//       {test.map((question, index) => (
//         <Question key={question.rightanswer + index} question={{ id: index, ...question }} />
//       ))}
//     </div>
//   );
// };
const QuestionLists = () => {
    return (
      <div>
        {data.map((category, idx) => (
          <div>
            <h1>{yago(category)[0]}</h1>
            {category[yago(category)[0]].map((mario) => (

              <h2>{yago(mario)[0]}</h2>
            ))}
          </div>
        ))}
      </div>
    );
  }

export default QuestionLists;
