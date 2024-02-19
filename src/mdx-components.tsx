import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontWeight: "800", marginTop: "4rem", fontSize: "32px" }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontWeight: "800", marginTop: "4rem", fontSize: "28px" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontWeight: "800", marginTop: "4rem", fontSize: "24px" }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontWeight: "800", marginTop: "4rem", fontSize: "20px" }}>
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 style={{ fontWeight: "800", marginTop: "4rem", fontSize: "18px" }}>
        {children}
      </h5>
    ),
    ...components,
  };
}
