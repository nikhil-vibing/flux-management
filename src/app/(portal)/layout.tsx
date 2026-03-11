import { PortalLayout } from "@/components/layout/portal-layout";

export default function PortalGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PortalLayout>{children}</PortalLayout>;
}
