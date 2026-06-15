function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`font-primary text-2xl font-bold ${className}`}>
      {children}
    </h3>
  );
}

export default H3;
