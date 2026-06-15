function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`font-secondary text-md ${className}`}>{children}</p>;
}

export default P;
