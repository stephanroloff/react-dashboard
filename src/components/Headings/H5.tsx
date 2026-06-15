function H5({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5 className={`font-primary text-m font-bold ${className}`}>{children}</h5>
  );
}

export default H5;
