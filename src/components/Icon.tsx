import React from 'react';
import classnames from 'classnames'; // import a library to deal with classname
// require('icons/money.svg');
// require('icons/chart.svg');
// require('icons/tag.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
  name?: string;
} & React.SVGAttributes<SVGElement> // also support  React SVG all Attributes
const Icon: React.FC<Props> = (props) => {
  const {name, children, className, ...rest} = props;
  return (
    <svg className={classnames('icon', className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name} />}
    </svg>
  );
};

export default Icon;