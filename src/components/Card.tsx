import { Card, CardContent } from "@/components/ui/card";

export function CardSmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card size="sm" className={`w-full ${className}`}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
