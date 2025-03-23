import Footer from "../common/footer/footer";
import Header from "../common/header/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="mainContainer">
      <Header />
      <main className="mx-[10%] grid gap-20">{children}</main>
      <Footer />
    </div>
  );
}
