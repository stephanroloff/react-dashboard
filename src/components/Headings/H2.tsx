function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`font-primary text-3xl font-bold ${className}`}>
      {children}
    </h2>
  );
}

export default H2;
