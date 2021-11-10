import React, { memo, useEffect } from "react";
import { ArtistLeftWrapper } from "./style";
// import { artistCategories } from "../../../../../services/local-data";
// import classNames from "classnames";

export default memo(function LJArtistLeftCpn() {
  //   const renderArtist = (artists, area) => {
  //     return (
  //       <div>
  //         {artists.map((item, index) => {
  //           const isSelect =
  //             currentArea === area && currentType.type === item.type;
  //           return (
  //             <div
  //               key={item.name}
  //               className={classNames({ active: isSelect })}
  //             >
  //               <span onClick={(e) => selectArtist(area, item)}>{item.name}</span>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   };
  return <ArtistLeftWrapper></ArtistLeftWrapper>;
});
