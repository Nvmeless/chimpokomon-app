// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Nes } from ".";
// // import { addLine, removeLine, updateLine } from "../../store";
// import { Text } from "../atoms";
// const History = () => {
//   // const dispatch = useDispatch();
//   // const store = useSelector((state) => {
//   //   console.log(state);
//   //   return state;
//   // });

//   // const feed = () => {
//   //   console.log("Feeding");
//   //   dispatch(addLine("feed"));
//   //   console.log(store);
//   // };
//   return (
//     <Nes.Container
//       onClick={() => {
//         feed();
//       }}
//     >
//       {store.chimpoHistory.map((x) => {
//         return (
//           <Text.Paragraph
//             style={{ backgroundColor: x.isDone ? "green" : "red" }}
//             key={x.id}
//             onClick={() => {
//               console.log("Delete", x.id);
//               dispatch(updateLine(x.id));
//             }}
//           >
//             {/* {x.id} -{x.type} */}
//           </Text.Paragraph>
//         );
//       })}
//     </Nes.Container>
//   );
// };

// export default History;
