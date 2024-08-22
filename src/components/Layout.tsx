import { ReactNode } from "react";
import StatusBar from "./Header/StatusBar";
import scss from "./Layout.module.scss"
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={scss.Layout}>
      <div className="container">
        <div className={scss.content}>
          <StatusBar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
