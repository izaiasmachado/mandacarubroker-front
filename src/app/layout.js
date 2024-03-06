import { Inter } from "next/font/google";
import StyledComponentsRegistry from '../lib/registry'
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mandacaru Broker",
  description: "Home Broker Mandacaru.dev",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
