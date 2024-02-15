import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontWeight: '800', margin: '24px 0', fontSize: '32px' }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontWeight: '800', margin: '24px 0', fontSize: '28px' }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontWeight: '800', margin: '24px 0', fontSize: '24px' }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontWeight: '800', margin: '24px 0', fontSize: '20px' }}>
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 style={{ fontWeight: '800', margin: '24px 0', fontSize: '18px' }}>
        {children}
      </h5>
    ),
    a: ({ children }) => (
      <a style={{ textDecoration: 'underline' }}>{children}</a>
    ),
    ul: ({ children }) => (
      <ul style={{ listStyleType: 'circle', paddingLeft: '24px' }}>
        {children}
      </ul>
    ),
    code: ({ children }) => (
      <code
        style={{
          color: 'black',
          backgroundColor: '#e5e7eb',
          borderRadius: '6px',
          padding: '1px 4px',
          margin: '0 2px',
          counterReset: 'line',
        }}>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          color: 'black',
          backgroundColor: '#d1d5db',
          borderRadius: '6px',
          padding: '2px',
          width: '100%',
          fontSize: '16px',
          overflowX: 'auto',
        }}>
        <code
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            borderRadius: '6px',
            padding: '1px 4px',
            margin: '0 2px',
            counterReset: 'line',
          }}>
          {children}
        </code>
      </pre>
    ),
    ...components,
  };
}
