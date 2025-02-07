export default function CircularProgress({
  size,
  percentage,
  color,
}: {
  size: number;
  percentage: number;
  color?: string;
}) {
  const radius = (size - size / 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  color = color ? color : "#ff8d35";

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        <circle
          className="transition-all duration-300 ease-in-out"
          stroke={"#f3f3f3"}
          strokeWidth={size / 8}
          fill="none"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="transition-all duration-300 ease-in-out"
          stroke={color}
          strokeWidth={size / 8}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
    </div>
  );
}
