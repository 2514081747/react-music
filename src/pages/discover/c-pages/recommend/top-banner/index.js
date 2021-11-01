import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBanner } from "../store/actionCreators";

import { Carousel } from "antd";

export default memo(function LJTopBanner() {
  //   const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
//   const state = useSelector(
//     (state) => ({
//       banners: state.recommend.topBanners,
//     }),
//     shallowEqual
//   );

  //   const bannerRef = useRef();
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  return (
    <div>
      <Carousel effect="fade" autoplay className="wrap-v2">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
});
