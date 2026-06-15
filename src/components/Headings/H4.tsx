function H4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4 className={`font-primary text-xl font-bold ${className}`}>
      {children}
    </h4>
  );
}

export default H4;
