import { useEffect, createRef } from 'react';
import * as d3 from 'd3';

export default function D3Example({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  const ref: React.Ref<SVGSVGElement> | undefined = createRef();

  useEffect(() => {
    draw();
  });

  const draw = () => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();
    svg
      .append('circle')
      .attr('r', 80)
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('fill', 'green');
  };

  return <svg width={width} height={height} ref={ref} />;
}
