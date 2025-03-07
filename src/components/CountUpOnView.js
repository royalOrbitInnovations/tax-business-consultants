"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function CountUpOnView({ end, duration }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView ? <CountUp end={end} duration={duration} /> : 0}
    </div>
  );
}

export default CountUpOnView;
