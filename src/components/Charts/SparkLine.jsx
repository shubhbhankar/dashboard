import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
























// import {
//   SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";
// import React from 'react'

// const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
//   return (
// <SparklineComponent
// id={id}
// height={height}
// width={width}
// lineWidth={1}
// valueType="Numaric"
// fill={color}
// border={{color:currentColor, width: 2}}
// dataSource={data}
// xName="x"
// yName="y"
// type={type}
// >
//   <Inject services={[[SparklineTooltip]]}/>


// </SparklineComponent>
//   )
// }

// export default SparkLine




// import React from "react";
// import {
//   SparklineComponent,
//   Inject,
//   SparklineTooltip,
// } from "@syncfusion/ej2-react-charts";

// const SparkLine = (props) => {
//   const { id, height, width, color, data, type, currentColor } = props;
//   return (
//     <SparklineComponent
//       id={id}
//       height={height}
//       width={width}
//       lineWidth={1}
//       valueType="Numeric"
//       fill={color}
//       border={{ color: currentColor, width: 2 }}
//       tooltipSettings={{
//         visible: true,
//         format: "${x} : data ${yval}",
//         trackLineSettings: {
//           visible: true,
//         },
//       }}
//       markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
//       dataSource={data}
//       xName="x"
//       yName="yval"
//       type={type}
//     >
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   );
// };

// export default SparkLine;

// export default class SparkLine extends React.PureComponent {
//   render() {
//     const { id, height, width, color, data, type, currentColor } = this.props;

//     return (
//       <SparklineComponent
//         id={id}
//         height={height}
//         width={width}
//         lineWidth={1}
//         valueType="Numeric"
//         fill={color}
//         border={{ color: currentColor, width: 2 }}
//         tooltipSettings={{
//           visible: true,
//           format: '${x} : data ${yval}',
//           trackLineSettings: {
//             visible: true,
//           },
//         }}
//         markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
//         dataSource={data}
//         xName="x"
//         yName="yval"
//         type={type}
//       >
//         <Inject services={[SparklineTooltip]} />
//       </SparklineComponent>
//     );
//   }
// }
