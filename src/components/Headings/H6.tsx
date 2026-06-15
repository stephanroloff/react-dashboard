function H6({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h6 className={`font-primary text-sm font-bold ${className}`}>
      {children}
    </h6>
  );
}

export default H6;
