import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Zaimu - Overview" }];
};

export default function OverviewGeneral() {
  return (
    <section>
      <span>Hola a todos</span>
    </section>
  );
}
