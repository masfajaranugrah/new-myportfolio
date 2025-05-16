import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import CodeBlock from './components/code-block';
import A from './components/mdx-components/a';
import Code from './components/mdx-components/code';
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: props => <h1 style={{ fontSize: 24, marginBottom: 16, marginTop: 16 }} {...props} />,
    h2: props => <h2 style={{ fontSize: 20, marginBottom: 16, marginTop: 16 }} {...props} />,
    h3: props => <h3 style={{ fontSize: 16, marginBottom: 16, marginTop: 16 }} {...props} />,
    p: props => (
      <p
        style={{
          color: '#a1a1aa',
          fontWeight: 450,
          marginBottom: 16,
          marginTop: 16
        }}
        {...props}
      />
    ),
    img: props => (
      <Image
        width={1080}
        height={720}
        style={{
          borderRadius: 10,
          borderColor: '#27272a',
          border: '1px solid #27272a',
          marginTop: 16,
          marginBottom: 16,
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        className='rounded-xl overflow-hidden border border-zinc-800'
        {...(props as ImageProps)}
      />
    ),
    ul: props => (
      <ul
        style={{
          paddingLeft: 20,
          marginBottom: 16,
          marginTop: 16,
        }}
        {...props}
      />
    ),
    li: props => (
      <li
        style={{
          marginBottom: 8,
          color: "#a1a1aa"
        }}
        {...props}
      />
    ),
    a: props => <A {...props}/>,
    CodeBlock: props => <CodeBlock {...props} />,
    // code: props => <Code {...props}/>,
    pre: props => (
      <pre
        style={{
          borderRadius: 8,
          overflow: 'hidden',
        }}
        {...props}
      />
    ),
    ...components
  };
}
